import { SVGImage } from "../icons";
import { useState } from "react";
import styles from "./FormikComponents.module.css";

const FormikPassword = ({ formik }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const showPassword = () => {
    setIsVisible(true);
  };

  const hidePassword = () => {
    setIsVisible(false);
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <label
      htmlFor="password"
      className={`${styles.FormikLabel} ${
        isFocus ? styles.Focus : styles.Blur
      }`}
    >
      <input
        id="password"
        name="password"
        type={isVisible ? "text" : "password"}
        placeholder="Password"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={formik.handleChange}
        value={formik.values.password}
        className={styles.FormikInput}
      />
      <button
        onClick={isVisible ? hidePassword : showPassword}
        className={styles.PasswordButton}
      >
        <SVGImage name={isVisible ? "visible" : "hidden"} />
      </button>
    </label>
  );
};

export { FormikPassword };
