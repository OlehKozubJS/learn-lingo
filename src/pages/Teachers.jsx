import { useState, useEffect } from "react";

import teachers from "../teachers.json";

import {
  TeacherCards,
  LessonModal,
  TeacherFilter,
  PageSwitcher,
} from "../components";

import AppStyles from "../App.module.css";

function TeachersPage() {
  const [teacherData, setTeacherData] = useState({});
  const [lessonModalData, setLessonModalData] = useState({});
  const [isLessonModal, setIsLessonModal] = useState(false);
  const [filteredTeachers, setFilteredTeachers] = useState([...teachers]);
  const [teachersOnPage, setTeachersOnPage] = useState([]);

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
    const filter = teachers.filter(
      (teacher) =>
        (language === "any language" || teacher.languages.includes(language)) &&
        (level === "any level" || teacher.levels.includes(level)) &&
        (price === "any price" ||
          (Number(teacher.price_per_hour) >= Number(price.split(" ")[0]) &&
            Number(teacher.price_per_hour) < Number(price.split(" ")[0]) + 10))
    );
    setFilteredTeachers(filter);
  };

  return (
    <main>
      <PageSwitcher
        list={filteredTeachers}
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

export default TeachersPage;