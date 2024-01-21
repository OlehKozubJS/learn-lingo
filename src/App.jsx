import { useState } from "react";

import { Modal } from "./components/Modal";

//import AppStyles from "./App.module.css";

function App() {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  return (
    <div>
      <h1>Main Page</h1>
      <button type="button" onClick={openModal}>
        Open Modal
      </button>
      {isModal && (
        <Modal isOpen={isModal}>This is common modal window component</Modal>
      )}
      <div>Values</div>
    </div>
  );
}

export { App };
