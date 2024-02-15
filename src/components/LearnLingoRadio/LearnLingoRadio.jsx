import { useState } from "react";

import { SVGImage } from "../../icons";

//import styles from "./LearnLingoRadio.module.css";

const LearnLingoRadio = ({ name, values, onChange, element, className }) => {
  const [currentValue, setCurrentValue] = useState("");
  const NewComponent = element;

  handleChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue);
    setCurrentValue(newValue);
  };

  return (
    <ul>
      {values.map((value, index) => {
        return (
          <li key={index}>
            <label htmlFor={value}>
              <input
                type="radio"
                name={name}
                id={value}
                value={value}
                onChange={handleChange}
                style={{ display: "none" }}
                className={className}
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
