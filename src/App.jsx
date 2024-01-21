import { useState } from "react";

import { useKeydown } from "./useKeydown";

import AppStyles from "./App.module.css";

function App() {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const handleBackdropClick = (event) => {
    if (event.target.className === AppStyles.Backdrop) {
      closeModal();
    }
  };

  useKeydown(closeModal, "Escape");

  return (
    <div>
      <h1>Main Page</h1>
      <div>{JSON.stringify(values)}</div>
      <button type="button" onClick={openModal}>
        Open Modal
      </button>
      {isModal && (
        <div className={AppStyles.Backdrop} onClick={handleBackdropClick}>
          <div className={AppStyles.Modal}>This is Modal</div>
        </div>
      )}
    </div>
  );
}

export { App };
