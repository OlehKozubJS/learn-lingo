import axios from "axios";
import { useSearchParams } from "react-router-dom";

import { useState, useEffect } from "react";

import {
  TeacherCards,
  LessonModal,
  TeacherFilter,
  PageSwitcher,
} from "../components";

import AppStyles from "../App.module.css";
import TeachersPageStyles from "./TeachersPage.module.css";

function TeachersPage() {
  const [teacherData, setTeacherData] = useState({});
  const [lessonModalData, setLessonModalData] = useState({});
  const [isLessonModal, setIsLessonModal] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [filterData, setFilterData] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [pageAmount, setPageAmount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams({});

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
    setPageNumber(data);
  };

  const handleTeacherFilterChange = (data) => {
    setFilterData(data);
  };

  useEffect(() => {
    const getDataFromBackend = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/load/` +
            `?language=${filterData.language || "any language"}` +
            `&level=${filterData.level || "any level"}` +
            `&price=${filterData.price || "any price"}` +
            `&page=${pageNumber || 1}` +
            `&perPage=3`
        );
        setSearchParams({
          language: filterData.language,
          level: filterData.level,
          price: filterData.price,
          page: pageNumber,
          perPage: 3,
        });
        setTeachers(response.data.teachers);
        setPageAmount(response.data.pages);
      } catch (error) {
        console.log(error.message);
        throw error;
      }
    };
    getDataFromBackend();
  }, [filterData, pageNumber]);

  return (
    <main className={TeachersPageStyles.TeachersPage}>
      <PageSwitcher
        pageAmount={pageAmount}
        onChange={handlePageSwitcherChange}
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
      <TeacherCards teachersData={teachers} bookTrialLesson={bookTrialLesson} />
    </main>
  );
}

export default TeachersPage;