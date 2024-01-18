import { useFormik } from "formik";
import { useState } from "react";

const useFormikValues = (initialValues) => {
  const [values, setValues] = useState();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      setValues(values, null, 2);
    },
  });
  return [formik, values];
};

export { useFormikValues };
