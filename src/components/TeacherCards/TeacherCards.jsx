import { TeacherCard } from "./TeacherCard";

import styles from "./TeacherCards.module.css";

const TeacherCards = (teachersData, bookTrialLesson) => {
  return (
    <ul className={styles.TeacherCards}>
      {teachersData.map((teacherData, index) => {
        return (
          <TeacherCard
            key={index}
            teacherData={teacherData}
            bookTrialLesson={bookTrialLesson}
          />
        );
      })}
    </ul>
  );
};

export { TeacherCards };
