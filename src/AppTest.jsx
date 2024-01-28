import { useState } from "react";

import teachers from "./teachers.json";

import { TeacherCards, LessonModal, TeacherFilter } from "./components";

import AppStyles from "./App.module.css";

function AppTest() {
  const [teacherData, setTeacherData] = useState({});
  const [lessonModalData, setLessonModalData] = useState({});
  const [isLessonModal, setIsLessonModal] = useState(false);
  const [filteredTeachers, setFilteredTeachers] = useState([...teachers]);

  const bookTrialLesson = (newTeacherData) => {
    setTeacherData(newTeacherData);
    setIsLessonModal(true);
  };

  const closeLessonModal = () => {
    setIsLessonModal(false);
  };

  const handleLessonModalSubmit = (data) => {
    setLessonModalData(data);
  };

  const handleTeacherFilterChange = ({ language, level, price }) => {
    console.log(language, level, price);
    const filtea = teachers.filter(
      (teacher) =>
        (language === "any language" || teacher.languages.includes(language)) &&
        (level === "any level" || teacher.levels.includes(level)) &&
        (price === "any price" ||
          (Number(teacher.price_per_hour) >= Number(price.split(" ")[0]) &&
            Number(teacher.price_per_hour) < Number(price.split(" ")[0]) + 10))
    );
    console.log(filtea);
    setFilteredTeachers(filtea);
  };
  /*
        (language === "any language" || teacher.languages.includes(language)) &&
          (level === "any level" || teacher.levels.includes(level)) &&
          (price === "any price" ||
            (Number(teacher.price_per_hour) >= Number(price.split(" ")[0]) &&
              Number(teacher.price_per_hour) <
                Number(price.split(" ")[0]) + 10));
*/
  return (
    <div>
      <h1>Test Page</h1>
      <div>{JSON.stringify(lessonModalData)}</div>
      <TeacherFilter onChange={handleTeacherFilterChange} />
      {isLessonModal && (
        <LessonModal
          closeModal={closeLessonModal}
          onSubmit={handleLessonModalSubmit}
          teacherName={`${teacherData.name} ${teacherData.surname}`}
          teacherPhoto={teacherData.avatar_url}
        />
      )}
      <TeacherCards
        teachersData={filteredTeachers}
        bookTrialLesson={bookTrialLesson}
      />
    </div>
  );
}

export { AppTest };
