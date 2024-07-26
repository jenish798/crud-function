import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import array from "../utils/data";
import { InputComp, ButtonComp } from "../components";
import strings from "../utils/commonString";

export default function Edit({invalid,placeholderName,placeholderAge,homeBtn,updateBtn}) {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("id"));
  }, []);

  let history = useNavigate();

  let index = array
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == "" || age == "") {
      alert(invalid);
      return;
    }

    let a = array[index];
    a.Name = name;
    a.Age = age;

    history("/");
  };


  return (
    <>
      <form>
        <InputComp
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={placeholderName}
        />
        <InputComp
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder={placeholderAge}
        />
        <ButtonComp onClick={(e) => handleSubmit(e)} type="submit">
          {updateBtn}
        </ButtonComp>
        <Link to="/">
          <ButtonComp>{homeBtn}</ButtonComp>
        </Link>
      </form>
    </>
  );
}

Edit.defaultProps = {
  placeholderName: strings.placeholderName,
  placeholderAge: strings.placeholderAge,
  homeBtn: strings.homeBtn,
  invalid: strings.invalid,
  updateBtn:strings.updateBtn,
};