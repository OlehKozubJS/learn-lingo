import { useFormik } from "formik";

import { Modal } from "./Modal";
import {
  FormikForm,
  FormikRadio,
  FormikName,
  FormikEmail,
  FormikPhone,
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
      <h2 className={styles.ModalHeader}>Book trial lesson</h2>
      <p className={styles.ModalText}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <FormikForm formik={formik} submitName="Sign Up">
        <FormikName formik={formik}>Name</FormikName>
        <FormikEmail formik={formik} />
        <FormikPhone formik={formik} />
      </FormikForm>
    </Modal>
  );
};

export { LessonModal };
