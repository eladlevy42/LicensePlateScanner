import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import { CarDataProvider } from "./contexts/carDataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarDataProvider>
      <App />
    </CarDataProvider>
  </React.StrictMode>
);
