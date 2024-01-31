import { useState } from "react";
import TeachersPage from "./pages/Teachers";
import { AppTest } from "./AppTest";

import AppStyles from "./App.module.css";

function App() {
  const [pageName, setPageName] = useState();

  return (
    <div>
      <h1>Main Page</h1>
      <TeachersPage />
      <AppTest />
    </div>
  );
}

export { App };
