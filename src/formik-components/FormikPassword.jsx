const FormikPassword = ({ formik, children }) => {
  return (
    <label htmlFor="password">
      <input
        id="password"
        name="password"
        type="password"
        placeholder={children}
        onChange={formik.handleChange}
        value={formik.values.password}
      />
    </label>
  );
};

export { FormikPassword };
