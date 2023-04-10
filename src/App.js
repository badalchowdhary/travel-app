import React from "react";
import {HashRouter as Router, Route, Routes } from "react-router-dom";
import ModeChoice from "./pages/ModeChoice";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/> 
        <Route exact path="/mode-choice" element={<ModeChoice/>} />
      </Routes>
    </Router>
  );
};

export default App;
