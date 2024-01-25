import { useFormik } from "formik";

import { Modal } from "./Modal";
import { FormikForm, FormikEmail, FormikPassword } from "../formik-components";

import styles from "./Modal.module.css";

const LoginModal = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <Modal closeModal={formik}>
      <h2 className={styles.ModalHeader}>Log In</h2>
      <p className={styles.ModalText}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <FormikForm formik={formik}>
        <FormikEmail formik={formik} />
        <FormikPassword formik={formik} />
      </FormikForm>
    </Modal>
  );
};

export { LoginModal };
