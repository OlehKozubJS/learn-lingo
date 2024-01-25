import { FormikInput } from "./FormikInput";

const FormikEmail = ({ formik }) => {
  return (
    <FormikInput formik={formik} name="email" type="email">
      Email
    </FormikInput>
  );
};

export { FormikEmail };
