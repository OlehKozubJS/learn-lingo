import { useState, useEffect } from "react";

import teachers from "./teachers.json";

import {
  TeacherCards,
  LessonModal,
  TeacherFilter,
  /*PageSwitcher,*/
} from "./components";
import { PageSwitcherTest } from "./PageSwitcherTest";

import AppStyles from "./App.module.css";

function AppTest() {
  const [filteredTeachers, setFilteredTeachers] = useState([...teachers]);
  const [teachersOnPage, setTeachersOnPage] = useState([]);

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
      <h1>Test Page</h1>
      <PageSwitcherTest
        list={filteredTeachers}
        onChange={handlePageSwitcherChange}
        perPage={3}
      />
      <TeacherFilter onChange={handleTeacherFilterChange} />
      <ol style={{ display: "flex", flexWrap: "wrap", gap: "20 px 10px" }}>
        {teachersOnPage.map((item, index) => {
          return (
            <li key={index} style={{ width: "200px" }}>
              <span>{item.name}</span> <span>{item.surname}</span>
            </li>
          );
        })}
      </ol>
    </main>
  );
}

export { AppTest };
