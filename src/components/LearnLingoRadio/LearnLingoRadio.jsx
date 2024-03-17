import { useState } from "react";

import styles from "./LearnLingoRadio.module.css";

const LearnLingoRadio = ({
  name,
  values,
  firstValue,
  onChange,
  element,
  className,
}) => {
  const NewComponent = element;

  const [currentValue, setCurrentValue] = useState(firstValue);

  const handleChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue);
    setCurrentValue(newValue);
  };

  return (
    <ul className={`${styles.LearnLingoRadioList} ${className.list}`}>
      {values.map((value, index) => {
        return (
          <li key={index} className={styles.LearnLingoRadioItem}>
            <label htmlFor={value}>
              <input
                type="radio"
                name={name}
                id={value}
                value={value}
                onChange={handleChange}
                className={`${styles.LearnLingoRadioButton} ${className.item}`}
                checked={currentValue === value}
              />
              <NewComponent value={value} />
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export { LearnLingoRadio };
