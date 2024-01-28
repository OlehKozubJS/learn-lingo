import { useState } from "react";

import styles from "./TeacherCard.module.css";

import { SVGImage } from "../../icons";

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
            alt={`${teacherData.name} ${teacherData.surname}`}
            className={styles.TeacherImage}
          />
          <div className={styles.TeacherIconContainer}>
            <SVGImage name="teacher-icon" size={12} />
          </div>
        </div>
        <div className={styles.TeacherTextInfo}>
          <div className={styles.CommonInfo}></div>
          <div className={styles.DetailedInfo}>
            <div></div>
            {isReadMore && (
              <p className={styles.Experience}>{teacherData.experience}</p>
            )}
            <button
              onClick={isReadMore ? hideInfo : showInfo}
              className={styles.ReadMoreButton}
            >
              {isReadMore ? "Hide" : "Read More"}
            </button>
          </div>
          {isReadMore && <div>{"Reviews"}</div>}
          <div></div>
          <button
            onClick={handleBookTrialLesson}
            className={styles.BookTrialLessonButton}
          >
            Book trial lesson
          </button>
        </div>
      </article>
    </li>
  );
};

export { TeacherCard };
