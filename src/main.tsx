import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { MenuProvider } from "./hooks/MenuContext.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <MenuProvider>
        <App />
      </MenuProvider>
    </React.StrictMode>
  );
} else {
  console.error("Elemento root não encontrado");
}
