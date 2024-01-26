import { useState } from "react";

import { SVGImage } from "../icons";

import styles from "./TeacherFilter.module.css";

const FormikSelect = ({ options, selected, select }) => {
  const [isOptionsList, setIsOptionsList] = useState(false);

  const openOptionsList = () => {
    setIsOptionsList(true);
  };

  const closeOptionsList = () => {
    setIsOptionsList(false);
  };

  const handleClick = (event) => {
    select(event.target.value);
  };

  return (
    <div className={styles.FilterSelect}>
      <div className={styles.SelectedItemContainer}>
        <p className={styles.SelectedItem}>{selected}</p>
        <button
          type="button"
          onClick={isOptionsList ? closeOptionsList : openOptionsList}
        >
          <SVGImage name={isOptionsList ? "up" : "down"} size={20} />
        </button>
      </div>
      {isOptionsList && (
        <ul className={styles.OptionsList}>
          {options.map((option, index) => (
            <li key={index} className={styles.OptionItem}>
              <button
                type="button"
                onClick={handleClick}
                className={styles.OptionButton}
                value={option}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { FormikSelect };
