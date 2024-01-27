import { useFormik } from "formik";

import { Modal } from "./Modal";
import {
  FormikForm,
  FormikRadio,
  FormikName,
  FormikEmail,
  FormikPhone,
} from "../../formik-components";

import styles from "./Modal.module.css";

const LessonModal = ({ onSubmit, closeModal, teacherPhoto, teacherName }) => {
  const formik = useFormik({
    initialValues: {
      reasonForLearning: "Career and business",
      name: "",
      email: "",
      tel: "",
    },
    onSubmit,
  });

  return (
    <Modal closeModal={closeModal}>
      <h2 className={styles.ModalHeader}>Book trial lesson</h2>
      <p className={styles.ModalText}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className={styles.Teacher}>
        <img src={teacherPhoto} alt="" className={styles.TeacherPhoto} />
        <div className={styles.TeacherInfo}>
          <h3 className={styles.TeacherHeader}>Your teacher</h3>
          <p className={styles.TeacherName}>{teacherName}</p>
        </div>
      </div>
      <FormikForm formik={formik} submitName="Book">
        <FormikRadio
          formik={formik}
          name={"reasonForLearning"}
          title="What is your main reason for learning English?"
          options={[
            "Career and business",
            "Lesson for kids",
            "Living abroad",
            "Exams and coursework",
            "Culture, travel or hobby",
          ]}
        />
        <FormikName formik={formik}>Full Name</FormikName>
        <FormikEmail formik={formik} />
        <FormikPhone formik={formik} />
      </FormikForm>
    </Modal>
  );
};

export { LessonModal };
