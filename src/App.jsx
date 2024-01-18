import { useFormikValues } from "./useFormikValues";
import { FormikForm } from "./FormikForm";
import { FormikInput } from "./FormikInput";

function App() {
  const [formik, values] = useFormikValues({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div>
      <h1>Main Page</h1>
      <FormikForm formik={formik}>
        <FormikInput key={1} formik={formik} name="name" type="text">
          User Name
        </FormikInput>
        <FormikInput key={2} formik={formik} name="email" type="email">
          Email Address
        </FormikInput>
        <FormikInput key={3} formik={formik} name="password" type="password">
          Password
        </FormikInput>
      </FormikForm>
      <div>{JSON.stringify(values)}</div>
    </div>
  );
}

export { App };
