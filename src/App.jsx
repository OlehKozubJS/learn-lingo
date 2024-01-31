import { useState } from "react";

import HomePage from "./pages/Home";
import TeachersPage from "./pages/Teachers";
import { AppTest } from "./AppTest";

import AppStyles from "./App.module.css";

function App() {
  const [pageName, setPageName] = useState();

  const getPage = (event) => {
    setPageName(event.target.value);
  };

  return (
    <div>
      <nav>
        <button type="button" onClick={getPage} value="home">
          Home
        </button>
        <button type="button" onClick={getPage} value="teachers">
          Teachers
        </button>
        <button type="button" onClick={getPage} value="test">
          Test Page
        </button>
      </nav>
      {pageName === "home" && <HomePage />}
      {pageName === "teachers" && <TeachersPage />}
      {pageName === "test" && <AppTest />}
    </div>
  );
}

export { App };
