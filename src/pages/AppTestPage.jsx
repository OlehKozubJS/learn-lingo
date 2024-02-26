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

import { Content } from "./Content";
import { Container } from "./Container";

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

  const handleModeValue = (value) => {
    setMode(value);
  };

  useEffect(() => {
    let changeLeftSetInterval;
    let newLeftSide = leftSide;
    const modeNumber = Number(mode);

    const changeLeft = () => {
      if (
        (modeNumber === -10 && newLeftSide > 0) ||
        (modeNumber === 10 && newLeftSide < 500)
      ) {
        newLeftSide += modeNumber;
      } else {
        clearInterval(changeLeftSetInterval);
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
      <LearnLingoRadio
        name="mode"
        values={["-10", "0", "10"]}
        firstValue={"0"}
        onChange={handleModeValue}
        element={Content}
        className={{ list: css.OptionList, item: css.LearnLingoRadio }}
      />
      <div className={css.Parent}>
        <div style={{ left: `${leftSide}px` }} className={css.Child}></div>
      </div>
      <div
        style={{
          position: "relative",
          height: "100px",
          width: "200px",
          backgroundColor: "rgb(120, 100, 250)",
          marginTop: "25px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "20px",
            height: "25px",
            width: "50px",
            backgroundColor: "rgb(150, 100)",
          }}
        ></div>
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
