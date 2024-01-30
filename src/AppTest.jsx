import { useState } from "react";

import teachers from "./teachers.json";

import {
  TeacherCards,
  LessonModal,
  TeacherFilter,
  PageSwitcher,
} from "./components";

import AppStyles from "./App.module.css";

function AppTest() {
  const [teacherData, setTeacherData] = useState({});
  const [lessonModalData, setLessonModalData] = useState({});
  const [isLessonModal, setIsLessonModal] = useState(false);
  const [filteredTeachers, setFilteredTeachers] = useState([...teachers]);
  const [teachersOnPage, setTeachersOnPage] = useState(filteredTeachers);

  const bookTrialLesson = (newTeacherData) => {
    setTeacherData(newTeacherData);
    setIsLessonModal(true);
  };

  const closeLessonModal = () => {
    setIsLessonModal(false);
  };

  const handleLessonModalSubmit = (data) => {
    setLessonModalData(data);
    setIsLessonModal(false);
  };

  const handlePageSwitcherChange = (data) => {
    setTeachersOnPage(data);
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

  return (
    <main>
      <h1>Test Page</h1>
      <div>
        <div>Reason for learning: {lessonModalData.reasonForLearning}</div>
        <div>Name: {lessonModalData.name}</div>
        <div>E-mail: {lessonModalData.email}</div>
        <div>Phone number: {lessonModalData.tel}</div>
      </div>
      <PageSwitcher
        array={filteredTeachers}
        onChange={handlePageSwitcherChange}
        perPage={3}
      />
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
        teachersData={teachersOnPage}
        bookTrialLesson={bookTrialLesson}
      />
    </main>
  );
}

export { AppTest };
