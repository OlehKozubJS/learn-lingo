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
  const [left, setLeft] = useState(0);
  const [mode, setMode] = useState("stop");

  useEffect(() => {
    const handleKeydown = (event) => {
      setKeyName(event.key);
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const handleModeValue = (event) => {
    setMode(event.target.value);
  };

  useEffect(() => {
    const changeLeft = () => {
      let step = 0;
      if (mode === "left") {
        step = 10;
      } else if (mode === "right") {
        step = -10;
      } else {
        step = 0;
      }
      setLeft(left, step);
    };

    const changeLeftSetInterval = setInterval(changeLeft, 500);

    return () => {
      clearInterval(changeLeftSetInterval);
    };
  }, [mode]);

  return (
    <main>
      <h1>Test Page</h1>
      <div>{keyName}</div>
      <div>
        <button onClick={handleModeValue} value="left">
          Left
        </button>
        <button onClick={handleModeValue} value="stop">
          Stop
        </button>
        <button onClick={handleModeValue} value="right">
          Right
        </button>
      </div>
      <div className={css.Parent}>
        <div style={{ left: `${left}px` }} className={css.Child}></div>
      </div>
    </main>
  );
}

export { AppTest };

/*
      <SVGImage name={"log-in"} size={20} />
      <SVGImage name={"logo"} size={28} />
*/
