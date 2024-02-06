import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { AppTest } from "./pages/AppTestPage.jsx";

const root = document.querySelector("#root");
const reactRoot = createRoot(root);

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
