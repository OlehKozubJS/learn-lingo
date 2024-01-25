import { useFormik } from "formik";

import { Modal } from "./Modal";
import {
  FormikForm,
  FormikName,
  FormikEmail,
  FormikPassword,
} from "../formik-components";

import styles from "./Modal.module.css";

const LessonModal = ({ onSubmit, closeModal }) => {
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <Modal closeModal={closeModal}>
      <h2 className={styles.ModalHeader}>Registration</h2>
      <p className={styles.ModalText}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <FormikForm formik={formik} submitName="Sign Up">
        <FormikName formik={formik}>Name</FormikName>
        <FormikEmail formik={formik} />
        <FormikPassword formik={formik} />
      </FormikForm>
    </Modal>
  );
};

export { LessonModal };
