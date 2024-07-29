import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import { strings } from "./utils";
import RouterComp from "./router";

function App() {
  const { welcomeMessage } = strings;

  return (
    <>
      <h3>{welcomeMessage}</h3>
      <RouterComp />   
    </>
  );
}

export default App;
