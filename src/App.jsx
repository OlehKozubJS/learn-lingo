import { useState } from "react";
import TeachersPage from "./pages/Teachers";
import { AppTest } from "./AppTest";

import AppStyles from "./App.module.css";

function App() {
  const [pageName, setPageName] = useState();

  return (
    <div>
      <nav>
        <button></button>
        <button></button>
        <button></button>
      </nav>
      <TeachersPage />
      <AppTest />
    </div>
  );
}

export { App };
