import { useState, useEffect } from "react";

import { useFormikValues } from "./useFormikValues";
import { FormikForm } from "./FormikForm";
import { FormikInput } from "./FormikInput";
import { SVGImage } from "./icons";
import { Backdrop, Modal } from "./App.module.css";
import { useKeydownHandler } from "./useKeydownHandler";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [formik, values] = useFormikValues({
    name: "",
    email: "",
    password: "",
  });

  const closeModal = () => {
    setIsModal(false);
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
      {isModal && (
        <div className={Backdrop} onClick={closeModal}>
          <div className={Modal}>This is Modal</div>
        </div>
      )}
    </div>
  );
}

export { App };
