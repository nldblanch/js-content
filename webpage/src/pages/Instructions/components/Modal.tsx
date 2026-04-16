import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from 'react';

type ModalContextValue = {
  openId: string | null;
  open: (id: string) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal components must be used inside <Modal>');
  }
  return context;
}

export function useModal() {
  return useModalContext();
}

type ModalRootProps = {
  children: ReactNode;
};

function ModalRoot({ children }: ModalRootProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const value = {
    openId,
    open: (id: string) => setOpenId(id),
    close: () => setOpenId(null),
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

type ModalTriggerProps = {
  opens: string;
  asChild?: boolean;
  children: ReactNode;
  className?: string;
};

function ModalTrigger({ opens, asChild = false, children, className }: ModalTriggerProps) {
  const { open } = useModalContext();

  const openModal = () => {
    open(opens);
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openModal();
    }
  };

  if (asChild) {
    return (
      <span role="button" tabIndex={0} onClick={openModal} onKeyDown={handleKeyDown} className={className}>
        {children}
      </span>
    );
  }

  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  );
}

type ModalWindowProps = {
  id: string;
  title: string;
  children: ReactNode;
};

function ModalWindow({ id, title, children }: ModalWindowProps) {
  const { openId, close } = useModalContext();
  const overlayRef = useRef<HTMLDivElement>(null);
  const isOpen = openId === id;

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [close, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={(event) => event.target === overlayRef.current && close()}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          close();
        }
      }}
      role="button"
      tabIndex={0}
      ref={overlayRef}
    >
      <div className="bg-black-800 border border-gray/20 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gray/10">
          <h3 className="text-2xl font-libre font-bold text-white">{title}</h3>
          <button
            onClick={close}
            className="cursor-pointer text-gray hover:text-white transition-colors text-3xl leading-none"
          >
            &times;
          </button>
        </div>
        <div className="p-6 font-fira text-gray text-lg">{children}</div>
      </div>
    </div>
  );
}

type ModalCompound = typeof ModalRoot & {
  Trigger: typeof ModalTrigger;
  Window: typeof ModalWindow;
};

export const Modal = Object.assign(ModalRoot, {
  Trigger: ModalTrigger,
  Window: ModalWindow,
}) as ModalCompound;
