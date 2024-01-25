import { useState } from "react";

import { LoginModal, RegisterModal } from "./components";

//import AppStyles from "./App.module.css";

function App() {
  const [isLogInModal, setIsLogInModal] = useState(false);
  const [isSignUpModal, setIsSignUpModal] = useState(false);
  const [isLessonModal, setIsLessonModal] = useState(false);
  const [logInValues, setLogInValues] = useState({ email: "", password: "" });
  const [signUpValues, setSignUpValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [lessonValues, setLessonValues] = useState({
    reasonForLearning: "",
    name: "",
    email: "",
    tel: "",
  });

  const openLogInModal = () => {
    setIsLogInModal(true);
  };

  const closeLogInModal = () => {
    setIsLogInModal(false);
  };

  const openSignUpModal = () => {
    setIsSignUpModal(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpModal(false);
  };

  const openLessonModal = () => {
    setIsLessonModal(true);
  };

  const closeLessonModal = () => {
    setIsLessonModal(false);
  };

  const handleLogInSubmit = (values) => {
    setLogInValues(values);
  };

  const handleSignUpSubmit = (values) => {
    setSignUpValues(values);
  };

  return (
    <div>
      <h1>Main Page</h1>
      <button type="button" onClick={openLogInModal}>
        Open Log In Modal
      </button>
      <button type="button" onClick={openSignUpModal}>
        Open Register Modal
      </button>
      {isLogInModal && (
        <LoginModal closeModal={closeLogInModal} onSubmit={handleLogInSubmit} />
      )}
      {isSignUpModal && (
        <RegisterModal
          closeModal={closeSignUpModal}
          onSubmit={handleSignUpSubmit}
        />
      )}
      <div>{logInValues.email}</div>
      <div>{logInValues.password}</div>
      <div>{signUpValues.name}</div>
      <div>{signUpValues.email}</div>
      <div>{signUpValues.password}</div>
      <div>{JSON.stringify(lessonValues)}</div>
    </div>
  );
}

export { App };
