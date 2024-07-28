import React from "react";
import "./App.css";
import RouterComp from "./router";
import { strings } from "./utils";

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
