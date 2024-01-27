import { useState } from "react";

import teachers from "./teachers.json";

import { TeacherCard } from "./components";

import AppStyles from "./App.module.css";

function AppTest() {
  const [teacherData, setTeacherData] = useState({});

  const bookTrialLesson = (newTeacherData) => {
    setTeacherData(newTeacherData);
  };

  return (
    <div>
      <h1>Test Page</h1>
      <div>{JSON.stringify(teacherData)}</div>
      <ul>
        <TeacherCard
          teacherData={teachers[0]}
          bookTrialLesson={bookTrialLesson}
        />
      </ul>
    </div>
  );
}

export { AppTest };
