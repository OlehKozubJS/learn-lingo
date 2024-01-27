import { useState } from "react";

import styles from "./TeacherCard.module.css";

const TeacherCard = ({ teacherData }) => {
  return (
    <div className={styles.TeacherCard}>
      <img
        src="../../images/teachers/01.jpg"
        alt=""
        className={styles.TeacherImage}
      />
      <div className={styles.TeacherTextInfo}>Hi</div>
    </div>
  );
};

export { TeacherCard };
