import { useState } from "react";

import { FilterSelect } from "./components/FilterSelect";

import AppStyles from "./App.module.css";

function App() {
  const [selectedItem, setSelectedItem] = useState("");

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h1>Main Page</h1>
      <div>{selectedItem}</div>
      <div style={{ backgroundColor: "rgb(200, 200, 250)" }}>
        <FilterSelect
          title="Languages"
          options={["French", "English", "German", "Ukrainian", "Polish"]}
          select={selectItem}
          width="221px"
        />
      </div>
    </div>
  );
}

export { App };
