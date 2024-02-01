import { useState } from "react";

import HomePage from "./pages/Home";
import TeachersPage from "./pages/Teachers";
import { AppTest } from "./AppTest";

import styles from "./App.module.css";

function App() {
  const [pageName, setPageName] = useState();

  const getPage = (event) => {
    setPageName(event.target.value);
  };

  return (
    <div>
      <header>
        <nav className={styles.NavigationBar}>
          <button
            type="button"
            onClick={getPage}
            value="home"
            className={styles.NavigationButton}
          >
            Home
          </button>
          <button
            type="button"
            onClick={getPage}
            value="teachers"
            className={styles.NavigationButton}
          >
            Teachers
          </button>
          <button
            type="button"
            onClick={getPage}
            value="test"
            className={styles.NavigationButton}
          >
            Test Page
          </button>
        </nav>
      </header>
      {pageName === "home" && <HomePage />}
      {pageName === "teachers" && <TeachersPage />}
      {pageName === "test" && <AppTest />}
    </div>
  );
}

export { App };
