import { useFormik } from "formik";
import { useState } from "react";

const useFormikValues = (values) => {
  const [values, setValues] = useState();
  const formik = useFormik({
    initialValues: values,
    onSubmit: (values) => {
      setValues(values, null, 2);
    },
  });
  return [formik, values];
};

export { useFormikValues };
