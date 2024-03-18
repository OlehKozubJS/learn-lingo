import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import {} from "./";

import { App } from "./App.jsx";

const root = document.querySelector("#root");
const reactRoot = createRoot(root);

reactRoot.render(
  <StrictMode>
    <Provider>
      <BrowserRouter basename="/learn-lingo">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
