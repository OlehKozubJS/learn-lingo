const FormikForm = ({ formik, children }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      {children}
      <button type="submit">Submit</button>
    </form>
  );
};

export { FormikForm };
