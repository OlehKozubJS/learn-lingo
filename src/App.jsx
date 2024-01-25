import { useState } from "react";

import { LoginModal } from "./components/LogInModal";

//import AppStyles from "./App.module.css";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [values, setValues] = useState("");

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const handleSubmit = (values) => {
    setValues(JSON.stringify(values));
  };

  return (
    <div>
      <h1>Main Page</h1>
      <button type="button" onClick={openModal}>
        Open Modal
      </button>
      {isModal && (
        <LoginModal closeModal={closeModal} onSubmit={handleSubmit} />
      )}
      <div>{values}</div>
    </div>
  );
}

export { App };
