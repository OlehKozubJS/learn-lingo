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
        <LearnLingoRadio
          name="mode"
          value="-10"
          isChecked={mode === "-10"}
          onChange={handleModeValue}
          className={css.LearnLingoRadio}
        >
          <div className={css.OptionItemButton}>Left</div>
        </LearnLingoRadio>
        <LearnLingoRadio
          name="mode"
          value="0"
          isChecked={mode === "0"}
          onChange={handleModeValue}
          className={css.LearnLingoRadio}
        >
          <div className={css.OptionItemButton}>Stop</div>
        </LearnLingoRadio>
        <LearnLingoRadio
          name="mode"
          value="10"
          isChecked={mode === "10"}
          onChange={handleModeValue}
          className={css.LearnLingoRadio}
        >
          <div className={css.OptionItemButton}>Right</div>
        </LearnLingoRadio>
      </div>
      <div className={css.Parent}>
        <div style={{ left: `${leftSide}px` }} className={css.Child}></div>
      </div>
      <div>{leftSide}</div>
      <div>{keyName}</div>
      <Container>
        <Content mainValue=" always wins!">Progress</Content>
      </Container>
    </main>
  );
}

export default AppTestPage;

/*
      <SVGImage name={"log-in"} size={20} />
      <SVGImage name={"logo"} size={28} />
*/
