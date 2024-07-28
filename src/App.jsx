import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import {Home,Edit,Create} from './page'

function App(strings) {

  const {welcomeMessage} = strings

  return (
    <>
 <h3>{welcomeMessage}</h3>
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