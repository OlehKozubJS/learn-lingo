import { useFormik } from "formik";

import { FormikForm, FormikName, FormikEmail } from "../formik-components";

import ModalStyles from "./Modal.module.css";

const Modal = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: { reason: "", name: "", email: "", phone: "" },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <FormikForm formik={formik}>
      <FormikEmail formik={formik}>Full Name</FormikEmail>
      <FormikEmail formik={formik}>Email</FormikEmail>
    </FormikForm>
  );
};

export { Modal };
