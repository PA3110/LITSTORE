import React from "react";
import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";
import Courses from "./Courses/Courses";

function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
      </Routes>
    </>
  );
}

export default App;
