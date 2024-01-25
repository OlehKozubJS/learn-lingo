import { useState } from "react";

import { LoginModal } from "./components/LogInModal";

//import AppStyles from "./App.module.css";

function App() {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div>
      <h1>Main Page</h1>
      <button type="button" onClick={openModal}>
        Open Modal
      </button>
      {isModal && <LoginModal closeModal={closeModal} />}
      <div>Values</div>
    </div>
  );
}

export { App };
