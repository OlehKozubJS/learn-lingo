import { useState } from "react";

import styles from "./FormikComponents.module.css";

const FormikInput = ({ formik, name, type, children }) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <label
      htmlFor={name}
      className={`${styles.FormikLabel} ${
        isFocus ? styles.Focus : styles.Blur
      }`}
    >
      <input
        id={name}
        name={name}
        type={type}
        placeholder={children}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={formik.handleChange}
        value={formik.values[name]}
        className={styles.FormikInput}
      />
    </label>
  );
};

export { FormikInput };
