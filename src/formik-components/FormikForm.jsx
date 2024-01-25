import styles from "./FormikComponents.module.css";

const FormikForm = ({ formik, children }) => {
  return (
    <form onSubmit={formik.handleSubmit} className={styles.FormikForm}>
      <div className={styles.FormikInputs}>{children}</div>
      <button type="submit" className={styles.FormikSubmitButton}>
        Submit
      </button>
    </form>
  );
};

export { FormikForm };
