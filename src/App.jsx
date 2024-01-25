import { useState } from "react";

import { LoginModal, RegisterModal } from "./components";

//import AppStyles from "./App.module.css";

function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
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
      {isLogIn && (
        <LoginModal closeModal={closeModal} onSubmit={handleSubmit} />
      )}
      {isSignUp && (
        <RegisterModal closeModal={closeModal} onSubmit={handleSubmit} />
      )}
      {is}
      <div>{values}</div>
    </div>
  );
}

export { App };
