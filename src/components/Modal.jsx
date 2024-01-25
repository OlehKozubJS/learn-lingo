import { useState } from "react";

import { useKeydown } from "../hooks";

import { SVGImage } from "../icons";

import ModalStyles from "./Modal.module.css";

const Modal = ({ closeModal, children }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleClick = (event) => {
    setIsHover(true);
    const isModal = event.target.className === ModalStyles.Backdrop;
    const isCloseButton =
      event.currentTarget.className === ModalStyles.CloseButton;
    if (isModal || isCloseButton) {
      closeModal();
    }
  };

  useKeydown(closeModal, "Escape");

  return (
    <div className={ModalStyles.Backdrop} onClick={handleClick}>
      <div className={ModalStyles.Modal}>
        <div className={ModalStyles.ModalHeader}>
          <button
            className={ModalStyles.CloseButton}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <SVGImage name={isHover ? "close-hover" : "close"} />
          </button>
        </div>
        <div className={ModalStyles.ModalContent}>{children}</div>
      </div>
    </div>
  );
};

export { Modal };
