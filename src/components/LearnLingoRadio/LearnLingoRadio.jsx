import { SVGImage } from "../../icons";

//import styles from "./LearnLingoRadio.module.css";

const LearnLingoRadio = ({
  name,
  value,
  isChecked,
  onChange,
  children,
  className,
}) => {
  return (
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
  );
};

export { LearnLingoRadio };
