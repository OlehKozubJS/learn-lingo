import { useState, lazy, Suspense } from "react";
import { Navigate, Routes, Route, Outlet } from "react-router-dom";

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
          <button
            type="button"
            onClick={getPage}
            value=""
            className={styles.NavigationButton}
            disabled={pageName === ""}
          >
            Home
          </button>
          <button
            type="button"
            onClick={getPage}
            value="teachers"
            className={styles.NavigationButton}
            disabled={pageName === "teachers"}
          >
            Teachers
          </button>
          <button
            type="button"
            onClick={getPage}
            value="test"
            className={styles.NavigationButton}
            disabled={pageName === "test"}
          >
            Test Page
          </button>
        </nav>
      </header>
      <Navigate to={pageName} />

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<p>Loading. Please Wait...</p>}>
              <Outlet />
            </Suspense>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/test" element={<AppTest />} />
        </Route>
      </Routes>
    </div>
  );
}

export { App };
