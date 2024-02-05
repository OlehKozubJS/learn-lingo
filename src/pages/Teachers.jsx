import axios from "axios";

import { useState, useEffect } from "react";

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
  const [dataFromBackend, setDataFromBackend] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState(dataFromBackend);
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

  const handleTeacherFilterChange = (data) => {
    setFilteredTeachers(data);
  };

  useEffect(() => {
    const getDataFromBackend = async () => {
      const response = await axios.get("http://localhost:3000/load");
      setDataFromBackend(response);
    };
    getDataFromBackend();
  }, []);

  return (
    <main>
      <PageSwitcher
        list={filteredTeachers}
        onChange={handlePageSwitcherChange}
        perPage={3}
      />
      <TeacherFilter
        teachers={dataFromBackend}
        onChange={handleTeacherFilterChange}
      />
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
