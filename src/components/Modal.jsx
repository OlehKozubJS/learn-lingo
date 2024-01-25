import { useState } from "react";

import { useKeydown } from "../hooks";

import { SVGImage } from "../icons";

import ModalStyles from "./Modal.module.css";

const Modal = ({ closeModal, children }) => {
  const [isHover, setIsHover] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    if (!isMouseDown) {
      setIsHover(false);
    }
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleClick = (event) => {
    setIsHover(false);
    setIsMouseDown(false);
    if (
      event.target.dataset.isbackdrop ||
      event.currentTarget.dataset.isclosebutton
    ) {
      closeModal();
    }
  };

  useKeydown(closeModal, "Escape");

  return (
    <div
      data-isbackdrop={true}
      className={ModalStyles.Backdrop}
      onClick={handleClick}
    >
      <div className={ModalStyles.Modal}>
        <div className={ModalStyles.CloseButtonContainer}>
          <button
            data-isclosebutton={true}
            className={ModalStyles.CloseButton}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
          >
            <SVGImage name={isHover ? "close-hover" : "close"} size={32} />
          </button>
        </div>
        <div className={ModalStyles.ModalContent}>{children}</div>
      </div>
    </div>
  );
};

export { Modal };
