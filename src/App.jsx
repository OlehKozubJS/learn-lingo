import AppStyles from "./App.module.css";
import { useState } from "react";

import { useFormikValues } from "./useFormikValues";
import { FormikForm } from "./FormikForm";
import { FormikInput } from "./FormikInput";
import { SVGImage } from "./icons";
import { useKeydown } from "./useKeydown";

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
