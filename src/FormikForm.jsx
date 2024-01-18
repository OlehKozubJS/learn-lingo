const FormikForm = ({ children }) => {
  return <form onSubmit={formik.handleSubmit}>{children}</form>;
};

export { FormikForm };
