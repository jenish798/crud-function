import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Edit, Create } from "../page";

const RouterComp = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>
  </Router>
);

export default RouterComp;