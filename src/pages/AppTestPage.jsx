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
  const [topValue, setTopValue] = useState(50);
  const [leftValue, setLeftValue] = useState(120);
  const [rangeValue, setRangeValue] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [initialX, setInitialX] = useState(0);

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

  const handlePurpleDivMousedown = (event) => {
    let newTopValue = event.clientY - event.target.getBoundingClientRect().top;
    let newLeftValue =
      event.clientX - event.target.getBoundingClientRect().left;

    if (event.target !== event.currentTarget) {
      return;
    }

    if (newTopValue > event.target.offsetHeight - 25) {
      newTopValue = event.target.offsetHeight - 25;
    }

    if (newLeftValue > event.target.offsetWidth - 50) {
      newLeftValue = event.target.offsetWidth - 50;
    }

    setTopValue(newTopValue);
    setLeftValue(newLeftValue);
  };

  const handleCustomRangeChange = (event) => {
    const rangeDial = event.currentTarget;
    const rangeAxis = event.currentTarget.parentNode;

    if (event.type === "mousedown") {
      setInitialX(event.clientX - rangeDial.getBoundingClientRect().left);
      setIsMouseDown(true);
    }

    if (event.type === "mousemove" && isMouseDown) {
      const currentX =
        event.clientX - rangeAxis.getBoundingClientRect().left - initialX;
      if (currentX >= 0 && currentX <= 150) {
        setRangeValue(currentX);
      }
    }

    if (event.type === "mouseup") {
      setIsMouseDown(false);
    }
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
        onMouseDown={handlePurpleDivMousedown}
      >
        <div
          style={{
            position: "absolute",
            top: topValue + "px",
            left: leftValue + "px",
            height: "25px",
            width: "50px",
            backgroundColor: "rgb(150, 100, 250)",
          }}
        ></div>
      </div>
      <div
        style={{
          position: "relative",
          height: "25px",
          width: "200px",
          backgroundColor: "rgb(120, 100, 250)",
          marginTop: "25px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: rangeValue + "px",
            height: "25px",
            width: "50px",
            backgroundColor: "rgb(50, 150, 250)",
          }}
          onMouseDown={handleCustomRangeChange}
          onMouseMove={handleCustomRangeChange}
          onMouseUp={handleCustomRangeChange}
        ></div>
      </div>
      <div>{rangeValue}</div>
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
