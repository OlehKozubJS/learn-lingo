import { useKeydown } from "../hooks";

import { SVGImage } from "../icons";

import ModalStyles from "./Modal.module.css";

const Modal = ({ onClose, children }) => {
  useKeydown(onClose, "Escape");

  return (
    <div className={ModalStyles.Backdrop}>
      <div className={ModalStyles.Modal}>
        <div className={ModalStyles.ModalHeader}>
          <SVGImage name="close" />
        </div>
        <div className={ModalStyles.ModalContent}>{children}</div>
      </div>
    </div>
  );
};

export { Modal };
