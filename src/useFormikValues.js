import { useFormik } from "formik";
//import { useState } from "react";

const useFormikValues = (initialValues) => {
  //const [values, setValues] = useState();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      return values;
    },
  });
  return null;
};

export { useFormikValues };
