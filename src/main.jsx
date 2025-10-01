import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* 
    // there are three things in the react router: BrowserRouter, Routes, Route
    //routes - a container for all the routes //route - a single route
    //browserrouter - a router that uses the HTML5 history API to keep your UI
    in sync with the URL
     */}
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
