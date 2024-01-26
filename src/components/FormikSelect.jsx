import { useState } from "react";

import { SVGImage } from "../icons";

import styles from "./FormikComponents.module.css";

const FormikSelect = ({ formik }) => {
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
    <div className={styles.FormikRadio}>
      <h3 className={styles.FormikRadioHeader}>{title}</h3>
      <ul className={styles.FormikRadioList}>
        {options.map((option, index) => (
          <li key={index} className={styles.FormikRadioItem}>
            <label htmlFor={option} className={styles.FormikRadioLabel}>
              <SVGImage
                name={`radio${formik.values[name] === option && "-checked"}`}
                size={20}
              />
              <input
                id={option}
                name={option}
                type="radio"
                onChange={formik.handleChange}
                value={option}
                className={styles.FormikRadioButton}
              />
              <p className={styles.FormikRadioText}>{option}</p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { FormikSelect };
