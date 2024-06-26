import axios from "axios";
import { useFormik } from "formik";
import { useState, useEffect } from "react";

import teachers from "../teachers.json";

import {
  TeacherCards,
  LessonModal,
  TeacherFilter,
  PageSwitcher,
} from "../components";

import { LearnLingoRadio } from "../components";

import { SVGImage } from "../icons";

import styles from "../App.module.css";

function AppTestPage() {
  const [mode, setMode] = useState(0);

  const handleModeValue = (value) => {
    setMode(value);
  };

  return (
    <main>
      <h1>App Test Page</h1>
      <div>{mode}</div>
    </main>
  );
}

export default AppTestPage;
