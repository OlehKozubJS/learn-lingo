const FormikEmail = ({ formik, children }) => {
  return (
    <label htmlFor="email">
      <input
        id="email"
        name="email"
        type="email"
        placeholder={children}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
    </label>
  );
};

export { FormikEmail };
