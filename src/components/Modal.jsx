import { useState } from "react";

import { useKeydown } from "../hooks";

import icons from "../icons/icons.svg";

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
    if (event.target.dataset.close) {
      closeModal(false);
    }
  };

  useKeydown(closeModal, "Escape");

  return (
    <div
      className={ModalStyles.Backdrop}
      onClick={handleClick}
      data-close={true}
    >
      <div className={ModalStyles.Modal}>
        <div className={ModalStyles.ModalHeader}>
          <button
            className={ModalStyles.CloseButton}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            data-close={true}
          >
            <svg onClick={handleClick} data-close={true}>
              <use
                xlinkHref={`${icons}#${isHover ? "close-hover" : "close"}`}
              />
            </svg>
          </button>
        </div>
        <div className={ModalStyles.ModalContent}>{children}</div>
      </div>
    </div>
  );
};

export { Modal };
