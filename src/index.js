import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux";

import { App } from "./App.jsx";

const root = document.querySelector("#root");
const reactRoot = createRoot(root);

reactRoot.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/learn-lingo">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
