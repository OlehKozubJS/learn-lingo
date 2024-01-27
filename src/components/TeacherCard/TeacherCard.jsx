import { useState } from "react";

import styles from "./TeacherCard.module.css";

const TeacherCard = ({ teacherData, bookTrialLesson }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <article className={styles.TeacherCard}>
      <div className={styles.TeacherImageContainer}>
        <img
          src={teacherData.avatar_url}
          alt=""
          className={styles.TeacherImage}
        />
      </div>
      <div className={styles.TeacherTextInfo}>
        <div></div>
        <div>
          <div></div>
          {isReadMore && <div></div>}
        </div>
        {isReadMore && <div></div>}
        <button>{isReadMore ? "Hide" : "Read More"}</button>
        <div></div>
        <button>Book trial lesson</button>
      </div>
    </article>
  );
};

export { TeacherCard };
