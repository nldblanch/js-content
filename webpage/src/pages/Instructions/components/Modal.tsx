import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * custom hook. exports methods for opening and
 * closing the modal in addition to a boolean to
 * determine whether the modal is currently open or closed.
 */
export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return { isOpen, open, close };
}

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

/**
 * Modal component. Combined with above 'useModal' custom hook,
  is designed to be reusable throughout application.

  See the 'CustomDetails' component for a current use of this 
  modal component; there the modal is used when the user clicks
   to expand a HTML <details> component (for example, they are 
   selecting to view a hint from the instructions). Because of 
   the way this 'Modal' component is designed, the 'CustomDetails'
  component renders this 'Modal' component as a child component,
  passing in custom contents to this 'Modal' component, with this
  content rendered as the 'children' of the 'Modal' component.
  For example, the 'CustomDetails' component renders an accept 
  button for this 'Modal' component. Custom logic added to the 
  'accept' button in the 'CustomDetails' component means that 
  clicking on this button will perform the expected behaviour: 
  the custom information in '<details>' will be revealed.
 */
export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={(e) => e.target === overlayRef.current && onClose()}
      ref={overlayRef}
    >
      <div className="bg-black-800 border border-gray/20 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gray/10">
          <h3 className="text-2xl font-libre font-bold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="cursor-pointer text-gray hover:text-white transition-colors text-3xl leading-none"
          >
            {/* closing symbol: X. Such a closing symbol appears at the top
            right of the modal. */}
            &times;
          </button>
        </div>
        <div className="p-6 font-fira text-gray text-lg">{children}</div>
      </div>
    </div>
  );
}
