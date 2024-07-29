import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import { strings } from "./utils";
import { routed } from "./router";

function App() {
  const { welcomeMessage } = strings;

  return (
    <>
      <h3>{welcomeMessage}</h3>
      <Router>
        <Routes>
          {routed.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>

    </>
  );
}

export default App;
