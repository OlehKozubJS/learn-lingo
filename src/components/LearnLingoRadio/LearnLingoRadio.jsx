import { SVGImage } from "../../icons";

//import styles from "./LearnLingoRadio.module.css";

const LearnLingoRadio = ({ name, value, onChange, children, style }) => {
  return (
    <label htmlFor={value}>
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        onChange={onChange}
        style={{ display: "none" }}
      />
      {children}
    </label>
  );
};

export { LearnLingoRadio };
