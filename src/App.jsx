import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import Create from './page/create.jsx'
import Edit from './page/edit.jsx'
import Home from './page/home.jsx'
import strings from "./utils/string.jsx";

function App() {

  return (
    <>
 <h3>{strings.welcome_Message}</h3>
 <Router>
  <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route
    path='/create'
    element={<Create/>}
    />
    <Route
    path='/edit'
    element={<Edit/>}
    />
    </Routes>
 </Router>
    </>
  )
}

export default App