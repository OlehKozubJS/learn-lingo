import { useFormik } from "formik";

import { FormikForm, FormikName, FormikEmail } from "../formik-components";

import ModalStyles from "./Modal.module.css";

const LessonModal = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: { reason: "", name: "", email: "", phone: "" },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return <FormikForm formik={formik}></FormikForm>;
};

export { LessonModal };
