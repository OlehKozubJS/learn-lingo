const FormikName = ({ formik, children }) => {
  return (
    <label htmlFor="name">
      <input
        id="name"
        name="name"
        type="text"
        placeholder={children}
        onChange={formik.handleChange}
        value={formik.values.name}
      />
    </label>
  );
};

export { FormikName };
