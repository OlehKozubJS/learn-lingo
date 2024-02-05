import { useState, useEffect } from "react";

import teachers from "./teachers.json";

import {
  TeacherCards,
  LessonModal,
  TeacherFilter,
  PageSwitcher,
} from "./components";

import { SVGImage } from "./icons";

import styles from "./App.module.css";
import css from "./AppTest.module.css";

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

  useEffect(() => {}, []);

  return (
    <main>
      <h1>Test Page</h1>
      <div>{keyName}</div>
      <div>
        <div></div>
      </div>
      <SVGImage name={"log-in"} size={20} />
      <SVGImage name={"logo"} size={28} />
    </main>
  );
}

export { AppTest };
