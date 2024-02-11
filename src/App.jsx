import { useState, lazy, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

const lazyLoad = (componentName) => {
  return lazy(() => {
    return import(`./pages/${componentName}`);
  });
};

const HomePage = lazyLoad("HomePage");
const TeachersPage = lazyLoad("TeachersPage");
const AppTest = lazyLoad("AppTestPage");

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
          {pageName !== "home" ? (
            <button
              type="button"
              onClick={getPage}
              value="home"
              className={styles.NavigationButton}
            >
              Home
            </button>
          ) : (
            <div className={styles.NavigationDiv}>Home</div>
          )}
          {pageName !== "teachers" ? (
            <button
              type="button"
              onClick={getPage}
              value="teachers"
              className={styles.NavigationButton}
            >
              Teachers
            </button>
          ) : (
            <div className={styles.NavigationDiv}>Teachers</div>
          )}
          {pageName !== "test" ? (
            <button
              type="button"
              onClick={getPage}
              value="test"
              className={styles.NavigationButton}
            >
              Test Page
            </button>
          ) : (
            <div className={styles.NavigationDiv}>Test</div>
          )}
        </nav>
      </header>
      <Suspense fallback={<p>Loading. Please Wait...</p>}>
        {pageName === "home" && <HomePage />}
        {pageName === "teachers" && <TeachersPage />}
        {pageName === "test" && <AppTest />}
      </Suspense>
    </div>
  );
}

export { App };
