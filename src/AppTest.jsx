//import { useState } from "react";

import teachers from "./teachers.json";

import { TeacherCard } from "./components";

import AppStyles from "./App.module.css";

function AppTest() {
  return (
    <div>
      <h1>Test Page</h1>
      <TeacherCard teacherData={teachers[1]} />
    </div>
  );
}

export { AppTest };
