import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { MenuProvider } from "./hooks/MenuContext.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>
);
