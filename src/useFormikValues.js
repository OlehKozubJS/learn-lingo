import { useFormik } from "formik";
import { useState } from "react";

const seFormikValues = (values) => {
  const [values, setValues] = useState();
  const formik = useFormik({
    initialValues: values,
    onSubmit: (values) => {
      setValues(values, null, 2);
    },
  });
  return [formik, values];
};
