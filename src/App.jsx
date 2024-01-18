import { useFormik } from "formik";
import { useState } from "react";
import { FormikForm } from "./FormikForm";
import { FormikInput } from "./FormikInput";

function App() {
  const [values, setValues] = useState();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setValues(values, null, 2);
    },
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
