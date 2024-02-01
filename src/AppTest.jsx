import { useState, useEffect } from "react";

import teachers from "./teachers.json";

import {
  TeacherCards,
  LessonModal,
  TeacherFilter,
  PageSwitcher,
} from "./components";

import { SVGImage } from "./icons";

import AppStyles from "./App.module.css";

function AppTest() {
  const [keyName, setKeyName] = useState("");

  useEffect(() => {
    const handleKeydown = (event) => {
      setKeyName(event.key);
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <main>
      <h1>Test Page</h1>
      <div>{keyName}</div>
      <SVGImage name={"log-in"} size={20} />
    </main>
  );
}

export { AppTest };
