import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Success from "./Success";   
import Failure from "./Failure";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/success" element={<Success />} />  
      <Route path="/failure" element={<Failure />} />
    </Routes>
  );
}

export default App;

