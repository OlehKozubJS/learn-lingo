import { useState } from "react";

import teachers from "./teachers.json";

import { TeacherCards, LessonModal } from "./components";

import AppStyles from "./App.module.css";

function AppTest() {
  const [teacherData, setTeacherData] = useState({});
  const [lessonModalData, setLessonModalData] = useState({});
  const [isLessonModal, setIsLessonModal] = useState(false);

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

  return (
    <div>
      <h1>Test Page</h1>
      <div>{JSON.stringify(lessonModalData)}</div>
      {isLessonModal && (
        <LessonModal
          closeModal={closeLessonModal}
          onSubmit={handleLessonModalSubmit}
          teacherName={`${teacherData.name} ${teacherData.surname}`}
          teacherPhoto={teacherData.avatar_url}
        />
      )}
      <ul>
        <TeacherCards bookTrialLesson={bookTrialLesson} />
      </ul>
    </div>
  );
}

export { AppTest };
