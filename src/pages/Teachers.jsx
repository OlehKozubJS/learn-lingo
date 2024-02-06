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
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [filterData, setFilterData] = useState({});
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
    setFilterData(data);
  };

  const handleTeacherFilterChange = (data) => {
    setFilteredTeachers(data);
  };

  useEffect(() => {
    const getDataFromBackend = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/load/?language=${filterData.language}&level=${filterData.level}&price=${filterData.price}`
        );
        setFilteredTeachers(response.data);
      } catch (error) {
        console.log(error.message);
        throw error;
      }
    };
    getDataFromBackend();
  }, [filterData]);

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
