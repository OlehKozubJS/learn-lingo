import { useState } from "react";

import { TeacherFilter } from "./components/TeacherFilter";

import AppStyles from "./App.module.css";
import { SVGImage } from "./icons";

function App() {
  const [selectedItems, setSelectedItems] = useState({});

  const selectItems = (items) => {
    setSelectedItems(items);
  };

  return (
    <div>
      <h1>Main Page</h1>
      <div>{JSON.stringify(selectedItems)}</div>
      <div style={{ backgroundColor: "rgb(200, 200, 250)" }}>
        <TeacherFilter onChange={selectItems} />
      </div>
    </div>
  );
}

export { App };
