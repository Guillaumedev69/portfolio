import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import "./index.scss";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import NotFound from "./pages/NotFound.jsx";
import AddProject from "./pages/AddProject.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/addproject" element={<AddProject/>} />
      <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
