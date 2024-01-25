import { FormikInput } from "./FormikInput";

const FormikPhone = ({ formik }) => {
  return (
    <FormikInput formik={formik} name="tel" type="tel">
      Phone number
    </FormikInput>
  );
};

export { FormikPhone };
