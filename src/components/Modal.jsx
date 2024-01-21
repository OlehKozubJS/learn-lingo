import { useKeydown } from "../hooks";

import { SVGImage } from "../icons";

import ModalStyles from "./Modal.module.css";

const Modal = ({ onClose, children }) => {
  useKeydown(onClose, "Escape");

  return (
    <div className={ModalStyles.Backdrop} data-close>
      <div className={ModalStyles.Modal}>
        <div className={ModalStyles.ModalHeader}>
          <button onClick={onClose}>
            <SVGImage name="close" data-close />
          </button>
        </div>
        <div className={ModalStyles.ModalContent}>{children}</div>
      </div>
    </div>
  );
};

export { Modal };
