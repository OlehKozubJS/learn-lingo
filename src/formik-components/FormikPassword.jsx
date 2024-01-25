import { SVGImage } from "../icons";
import { useState } from "react";

const FormikPassword = ({ formik, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const showPassword = () => {
    setIsVisible(true);
  };

  const hidePassword = () => {
    setIsVisible(false);
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <label htmlFor="password">
      <input
        id="password"
        name="password"
        type={isVisible ? "text" : "password"}
        placeholder={children}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button onClick={isVisible ? hidePassword : showPassword}>
        <SVGImage name={isVisible ? "visible" : "hidden"} />
      </button>
    </label>
  );
};

export { FormikPassword };
