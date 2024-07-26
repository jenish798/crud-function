import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import array from "../utils/const";
import { InputComp, ButtonComp } from "../components";
import strings from "../utils/string";

export default function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  let index = array
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == "" || age == "") {
      alert(strings.invalid);
      return;
    }

    let a = array[index];
    a.Name = name;
    a.Age = age;

    history("/");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("id"));
  }, []);
  return (
    <>
      <form>
        <InputComp
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={strings.placeholderName}
        />
        <InputComp
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder={strings.placeholderAge}
        />
        <ButtonComp onClick={(e) => handleSubmit(e)} type="submit">
          {strings.updateBtn}
        </ButtonComp>
        <Link to="/">
          <ButtonComp>{strings.homeBtn}</ButtonComp>
        </Link>
      </form>
    </>
  );
}
