import { useState } from "react";

import { SVGImage } from "../../icons";

import styles from "./TeacherFilter.module.css";

const FilterSelect = ({ title, options, select, width }) => {
  const [isOptionsList, setIsOptionsList] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const openOptionsList = () => {
    setIsOptionsList(true);
  };

  const closeOptionsList = () => {
    setIsOptionsList(false);
  };

  const handleClick = (event) => {
    const newSelected = event.target.value;
    setSelected(newSelected);
    select(newSelected);
    setIsOptionsList(false);
  };

  return (
    <div className={styles.FilterSelect} style={{ width }}>
      <h3 className={styles.FilterSelectHeader}>{title}</h3>
      <button
        type="button"
        onClick={isOptionsList ? closeOptionsList : openOptionsList}
        className={styles.OptionListButton}
      >
        {selected}
        <SVGImage name={isOptionsList ? "up" : "down"} size={20} />
      </button>
      {isOptionsList && (
        <ul className={styles.OptionList}>
          {options.map((option, index) => (
            <li key={index} className={styles.OptionItem}>
              <button
                type="button"
                onClick={handleClick}
                value={option}
                className={styles.OptionItemButton}
                disabled={selected === option}
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

export { FilterSelect };
