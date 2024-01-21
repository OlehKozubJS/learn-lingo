import { useFormik } from "formik";

import {} from "";

import { SVGImage } from "../icons";

import ModalStyles from "./Modal.module.css";

const Modal = ({ children }) => {
  return (
    <div>
      <div>
        <SVGImage name="close" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export { Modal };
