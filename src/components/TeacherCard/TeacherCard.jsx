import { useState } from "react";

import styles from "./TeacherCard.module.css";

const TeacherCard = ({ teacherData, bookTrialLesson }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const showInfo = () => {
    setIsReadMore(true);
  };

  const hideInfo = () => {
    setIsReadMore(false);
  };

  const handleBookTrialLesson = () => {
    bookTrialLesson({
      avatar_url: teacherData.avatar_url,
      name: teacherData.name,
      surname: teacherData.surname,
    });
  };

  return (
    <li>
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
          <button onClick={isReadMore ? hideInfo : showInfo}>
            {isReadMore ? "Hide" : "Read More"}
          </button>
          <div></div>
          <button onClick={handleBookTrialLesson}>Book trial lesson</button>
        </div>
      </article>
    </li>
  );
};

export { TeacherCard };
