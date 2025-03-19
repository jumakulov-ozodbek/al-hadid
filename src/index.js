import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // CSS faylingiz mavjud ekanligini tekshiring
import App from "./App"; // App.js import qilinganiga ishonch hosil qiling
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

