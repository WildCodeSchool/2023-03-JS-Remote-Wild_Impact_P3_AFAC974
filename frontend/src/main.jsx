import React from "react";
import ReactDOM from "react-dom/client";
import { CurrentUserProvider } from "./components/contexts/UserContexts";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </React.StrictMode>
);
