import { useState } from "react";

import { useKeydown } from "../hooks";

import { SVGImage } from "../icons";

import ModalStyles from "./Modal.module.css";

const Modal = ({ isOpen, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [isHover, setIsHover] = useState(false);

  const handleClick = (event) => {
    if (event.target.dataset.close) {
      setIsModalOpen(false);
    }
  };

  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useKeydown(closeModal, "Escape");

  return (
    isModalOpen && (
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
              <SVGImage name={isHover ? "close-hover" : "close"} />
            </button>
          </div>
          <div className={ModalStyles.ModalContent}>{children}</div>
        </div>
      </div>
    )
  );
};

export { Modal };
