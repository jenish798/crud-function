import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import Create from './components/create.jsx'
import Edit from './components/edit.jsx'
import Home from './components/home.jsx'

function App() {

  return (
    <>
 <h3>Crud App</h3>
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
