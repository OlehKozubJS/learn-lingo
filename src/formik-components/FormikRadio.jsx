import { SVGImage } from "../icons";

import styles from "./FormikRadio.module.css";

const FormikRadio = ({ formik, name, options, children, styles }) => {
  return (
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
            <div>{children}</div>
          </label>
        </li>
      ))}
    </ul>
  );
};

export { FormikRadio };
