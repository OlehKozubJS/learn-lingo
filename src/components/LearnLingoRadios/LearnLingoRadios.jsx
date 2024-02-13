import { SVGImage } from "../../icons";

import styles from "./LearnLingoRadios.module.css";

const LearnLingoRadios = ({ name, options, onChange }) => {
  return (
    <ul className={styles.FormikRadio}>
      {options.map((option, index) => (
        <li key={index} className={styles.FormikRadioItem}>
          <label htmlFor={option}>
            <input
              type="radio"
              name={name}
              id={option}
              value={option}
              onChange={onChange}
              className={styles.FormikRadioButton}
            />
            {option}
          </label>
        </li>
      ))}
    </ul>
  );
};

export { LearnLingoRadios };
