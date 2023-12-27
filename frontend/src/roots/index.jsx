import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

const htmlElement = document.querySelector(".root-html")
const root = ReactDOM.createRoot(htmlElement)
root.render(<App/>)