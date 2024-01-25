import { useFormik } from "formik";

import { Modal } from "./Modal";
import { FormikForm, FormikEmail, FormikPassword } from "../formik-components";

import ModalStyles from "./Modal.module.css";

const LoginModal = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  <Modal closeModal={formik}>
    <FormikForm formik={formik}>
      <FormikEmail formik={formik} />
      <FormikPassword formik={formik} />
    </FormikForm>
  </Modal>;
};

export { LoginModal };
