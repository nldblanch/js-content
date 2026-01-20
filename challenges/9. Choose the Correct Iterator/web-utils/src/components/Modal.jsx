import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";
import "./Modal.css";

const ModalContext = createContext(undefined);

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: windowName }) {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Open must be used within a Modal");
  const { open } = context;
  return cloneElement(children, { onClick: () => open(windowName) });
}

function Window({ children, name }) {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Window must be used within a Modal");
  const { openName, close } = context;

  const ref = useOutsideClick(close, true);

  if (name !== openName) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content" ref={ref}>
        <button className="modal-close-btn" onClick={close}>
          <span className="modal-close-icon">✕</span>
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;