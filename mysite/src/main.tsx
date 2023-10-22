import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ルーター実装

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="">
      <App />
    </div>
  </React.StrictMode>
);
