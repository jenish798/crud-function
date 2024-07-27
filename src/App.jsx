import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Link } from "react-router-dom";
import './App.css'
import Create from './page/create.jsx'
import Edit from './page/edit.jsx'
import Home from './page/home.jsx'
import strings from "./utils/commonString.jsx";
import ButtonComp from "./components/button/Button.jsx";
import { InputComp } from "./components/index.jsx";

export const handleChange = (fun) => (e) => {
  fun(e.target.value);
};

export const FormInput = ({ name, age, handleChange, setName, setAge, handleSubmit, updateBtn, homeBtn, placeholderName, placeholderAge,submitBtn }) => {
  return (
    <form>
      <InputComp
        type="text"
        value={name}
        onChange={handleChange(setName)}
        placeholder={placeholderName}
      />
      <InputComp
        type="text"
        value={age}
        onChange={handleChange(setAge)}
        placeholder={placeholderAge}
      />
      <ButtonComp onClick={handleSubmit} type="submit">
        {updateBtn}
      </ButtonComp>

      {/* <ButtonComp onClick={(e) => handleSubmit(e)} type="submit">
          {submitBtn}
        </ButtonComp> */}

      <Link to="/">
        <ButtonComp>{homeBtn}</ButtonComp>
      </Link>
    </form>
      );
    };

export const Table = ({headers, array, setID, deleted, updateBtn, deleteBtn}) =>{
  const { headerName, headerAge } = headers;
  return (
  <table>
        <thead>
          <tr>
            <th>{headerName}</th>
            <th>{headerAge}</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item) => {
            return (
              <tr>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>
                  <Link to={`/edit`}>
                    <ButtonComp
                      onClick={(e) => setID(item.id, item.Name, item.Age)}
                    >
                      {updateBtn}
                    </ButtonComp>
                  </Link>
                </td>

                <td>
                  <ButtonComp onClick={(e) => deleted(item.id)}>
                    {deleteBtn}
                  </ButtonComp>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>)
}

function App() {

  return (
    <>
 <h3>{strings.welcomeMessage}</h3>
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