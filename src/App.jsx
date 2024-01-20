import { useState, useEffect } from "react";

import { useFormikValues } from "./useFormikValues";
import { FormikForm } from "./FormikForm";
import { FormikInput } from "./FormikInput";
import { SVGImage } from "./icons";
import AppStyles from "./App.module.css";
import { useKeydownHandler } from "./useKeydownHandler";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [formik, values] = useFormikValues({
    name: "",
    email: "",
    password: "",
  });

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

  useEffect(() => {
    useKeydownHandler(closeModal);
  }, [closeModal]);

  return (
    <div>
      <h1>Main Page</h1>
      <FormikForm formik={formik}>
        <FormikInput key={1} formik={formik} name="name" type="text">
          User Name
        </FormikInput>
        <FormikInput key={2} formik={formik} name="email" type="email">
          Email Address
        </FormikInput>
        <FormikInput key={3} formik={formik} name="password" type="password">
          Password
        </FormikInput>
      </FormikForm>
      <div>{JSON.stringify(values)}</div>
      <SVGImage name="up" />
      <SVGImage name="down" />
      <SVGImage name="visible" />
      <SVGImage name="hidden" />
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
