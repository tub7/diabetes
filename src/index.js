import React from "react";
import ReactDOM from "react-dom";
import "./styleoftodo.css";
import reportWebVitals from "./reportWebVitals";
import Todoapp from "./Todoapp.js";

ReactDOM.render(
    <React.StrictMode>
        <Todoapp />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
