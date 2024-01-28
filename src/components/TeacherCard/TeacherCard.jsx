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
          <div className={styles.CommonInfo}>
            <div className={styles.TeacherNameBlock}>
              <div className={styles.LanguagesLine}>Languages</div>
              <h2 className={styles.TeacherNameHeader}>
                <span>{teacherData.name}</span>{" "}
                <span>{teacherData.surname}</span>
              </h2>
            </div>
            <div className={styles.CommonInfoLineAndFavourite}>
              <div className={styles.CommonInfoLine}>
                <div className={styles.CommonInfoItem}>
                  <SVGImage name="book" size={16} />
                  Lessons online
                </div>
                <SVGImage name="vector" size={16} />
                <div className={styles.CommonInfoItem}>
                  Lessons done: {teacherData.lessons_done}
                </div>
                <SVGImage name="vector" size={16} />
                <div className={styles.CommonInfoItem}>
                  <SVGImage name="star" size={16} />
                  Rating: {teacherData.rating}
                </div>
                <SVGImage name="vector" size={16} />
                <div className={styles.CommonInfoItem}>
                  Price / 1 hour:
                  <span className={styles.PricePerHour}>
                    {teacherData.price_per_hour} $
                  </span>
                </div>
              </div>
              <SVGImage name="heart" size={26} />
            </div>
          </div>
          <div className={styles.DetailedInfo}>
            <div className={styles.LessonsInfo}>
              <div className={styles.LessonsInfoItem}>
                <span className={styles.LessonsInfoProperty}>Speaks: </span>
                <span
                  className={`${styles.CommonInfoValue} ${styles.Languages}`}
                >
                  {teacherData.languages.join(", ")}
                </span>
              </div>
              <div className={styles.LessonsInfoItem}>
                <span className={styles.LessonsInfoProperty}>
                  Lesson Info:{" "}
                </span>
                <span className={styles.CommonInfoValue}>
                  {teacherData.lesson_info}
                </span>
              </div>
              <div className={styles.LessonsInfoItem}>
                <span className={styles.LessonsInfoProperty}>Conditions: </span>
                <span className={styles.CommonInfoValue}>
                  {teacherData.conditions}
                </span>
              </div>
            </div>
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
          {isReadMore && (
            <ul className={styles.Reviews}>
              {teacherData.reviews.map((review, index) => {
                return (
                  <li key={index} className={styles.Review}>
                    <div className={styles.ReviewerImageNameAndRating}>
                      <img
                        src=""
                        alt={review.reviewer_name}
                        className={styles.ReviewerImage}
                      />
                      <div className={styles.ReviewerNameAndRating}>
                        <h3 className={styles.ReviewerName}>
                          {review.reviewer_name}
                        </h3>
                        <div className={styles.ReviewerRating}>
                          <SVGImage name="star" size={16} />
                          {review.reviewer_rating}
                        </div>
                      </div>
                    </div>
                    <p className={styles.ReviewerComment}>{review.comment}</p>
                  </li>
                );
              })}
            </ul>
          )}
          <ul className={styles.Levels}>
            {teacherData.levels.map((level, index) => {
              return (
                <li key={index} className={styles.Level}>
                  {level}
                </li>
              );
            })}
          </ul>
          {isReadMore && (
            <button
              onClick={handleBookTrialLesson}
              className={styles.BookTrialLessonButton}
            >
              Book trial lesson
            </button>
          )}
        </div>
      </article>
    </li>
  );
};

export { TeacherCard };
