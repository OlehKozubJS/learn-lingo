import { SVGImage } from "../icons";

import styles from "./FormikRadio.module.css";

const FormikRadio = ({ formik, title, name, options }) => {
  return (
    <div className={styles.FormikRadio}>
      <h3 className={styles.FormikRadioHeader}>{title}</h3>
      <ul className={styles.FormikRadioList}>
        {options.map((option, index) => (
          <li key={index} className={styles.FormikRadioItem}>
            <label htmlFor={option} className={styles.FormikRadioLabel}>
              <input
                id={option}
                name={name}
                type="radio"
                onChange={formik.handleChange}
                value={option}
                className={styles.FormikRadioButton}
              />
              <SVGImage
                name={`radio${
                  formik.values[name] === option ? "-checked" : ""
                }`}
                size={20}
              />
              <p className={styles.FormikRadioText}>{option}</p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { FormikRadio };
