import React, { type ReactNode } from "react";
import ReactDOM from "react-dom";
import Close from "./icons/Close";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        <a className="project-modal-close-button" onClick={onClose}>
          <Close></Close>
        </a>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
