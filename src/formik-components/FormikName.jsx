import { FormikInput } from "./FormikInput";

const FormikName = ({ formik, children }) => {
  return (
    <FormikInput formik={formik} name="name" type="text">
      {children}
    </FormikInput>
  );
};

export { FormikName };
