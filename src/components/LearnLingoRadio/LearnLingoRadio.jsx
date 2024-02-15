import { SVGImage } from "../../icons";

//import styles from "./LearnLingoRadio.module.css";

const LearnLingoRadio = ({
  name,
  values,
  isChecked,
  onChange,
  element,
  className,
}) => {
  const NewComponent = element;

  return (
    <ul>
      {(value, index) => {
        return (
          <li key={index}>
            <label htmlFor={value}>
              <input
                type="radio"
                name={name}
                id={value}
                value={value}
                onChange={onChange}
                style={{ display: "none" }}
                className={className}
                checked={isChecked}
              />
              {children}
            </label>
          </li>
        );
      }}
    </ul>
  );
};

export { LearnLingoRadio };
