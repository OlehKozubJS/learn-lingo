const FormikInput = ({ formik, name, type, children }) => {
  return (
    <label htmlFor={name}>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={children}
        onChange={formik.handleChange}
        value={formik.values[name]}
      />
    </label>
  );
};

export { FormikInput };
