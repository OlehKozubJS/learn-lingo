import { useFormik } from "formik";

import { useKeydown } from "../hooks";

import { SVGImage } from "../icons";

import ModalStyles from "./Modal.module.css";

const Modal = ({ onClose, children }) => {
  useKeydown(onClose, "Escape");

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
