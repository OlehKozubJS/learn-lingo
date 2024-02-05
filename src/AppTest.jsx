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
  const [leftSide, setLeftSide] = useState(0);
  const [mode, setMode] = useState("stop");
  const [dataFromBackend, setDataFromBackend] = useState("");

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
      let step;
      if (mode === "left" && newLeftSide > 0) {
        step = -10;
      } else if (mode === "right" && newLeftSide < 500) {
        step = 10;
      } else {
        step = 0;
        clearInterval(changeLeftSetInterval);
      }
      newLeftSide += step;
      setLeftSide(newLeftSide);
    };

    changeLeftSetInterval = setInterval(changeLeft, 500);

    return () => {
      clearInterval(changeLeftSetInterval);
    };
  }, [mode]);

  useEffect(() => {
    const getDataFromBackend = await() => {const response = };
    
  }, []);

  return (
    <main>
      <h1>Test Page</h1>
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
        <div style={{ left: `${leftSide}px` }} className={css.Child}></div>
      </div>
      <div>{leftSide}</div>
      <div>{keyName}</div>
      <div>{dataFromBackend}</div>
    </main>
  );
}

export { AppTest };

/*
      <SVGImage name={"log-in"} size={20} />
      <SVGImage name={"logo"} size={28} />
*/
