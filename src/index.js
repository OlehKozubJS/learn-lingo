import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { AppTest } from "./AppTest.jsx";

const root = document.querySelector("#root");
const reactRoot = createRoot(root);

reactRoot.render(
  <StrictMode>
    <AppTest />
  </StrictMode>
);
