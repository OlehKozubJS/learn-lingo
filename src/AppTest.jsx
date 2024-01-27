import { useState } from "react";

import { TeacherFilter } from "./components/TeacherFilter";

import AppStyles from "./App.module.css";
import { SVGImage } from "./icons";

function AppTest() {
  const [selectedItems, setSelectedItems] = useState({});

  const selectItems = (items) => {
    setSelectedItems(items);
  };

  return (
    <div>
      <h1>Test Page</h1>
      <div>{JSON.stringify(selectedItems)}</div>
      <TeacherFilter onChange={selectItems} />
    </div>
  );
}

export { AppTest };