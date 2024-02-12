import axios from "axios";

import { useState, useEffect } from "react";

import teachers from "../teachers.json";

import {
  TeacherCards,
  LessonModal,
  TeacherFilter,
  PageSwitcher,
} from "../components";

import { SVGImage } from "../icons";

import styles from "../App.module.css";
import css from "./AppTestPage.module.css";

function AppTestPage() {
  const [keyName, setKeyName] = useState("");
  const [leftSide, setLeftSide] = useState(0);
  const [mode, setMode] = useState(0);

  useEffect(() => {
    const handleKeydown = (event) => {
      setKeyName((keyName) => {
        return keyName + event.key;
      });
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
    let changeLeftSetInterval;
    let newLeftSide = leftSide;
    const changeLeft = () => {
      const modeNumber = Number(mode);

      if (
        (modeNumber === -10 && newLeftSide > 0) ||
        (modeNumber === 10 && newLeftSide < 500)
      ) {
        newLeftSide += modeNumber;
      }
      setLeftSide(newLeftSide);
    };

    changeLeftSetInterval = setInterval(changeLeft, 500);

    return () => {
      clearInterval(changeLeftSetInterval);
    };
  }, [mode]);

  return (
    <main>
      <h1>App Test Page</h1>
      <div>
        <button onClick={handleModeValue} value={-10}>
          Left
        </button>
        <button onClick={handleModeValue} value={0}>
          Stop
        </button>
        <button onClick={handleModeValue} value={10}>
          Right
        </button>
      </div>
      <div className={css.Parent}>
        <div style={{ left: `${leftSide}px` }} className={css.Child}></div>
      </div>
      <div>{leftSide}</div>
      <div>{keyName}</div>
    </main>
  );
}

export default AppTestPage;

/*
      <SVGImage name={"log-in"} size={20} />
      <SVGImage name={"logo"} size={28} />
*/
