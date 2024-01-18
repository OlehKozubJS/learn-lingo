import { useFormik } from "formik";
import { useState } from "react";
import { FormikForm } from "./FormikForm";

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
        <label htmlFor="name">User Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <button type="submit">Submit</button>
      </FormikForm>
      <div>{JSON.stringify(values)}</div>
    </div>
  );
}

export { App };
