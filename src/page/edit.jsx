import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleChange, strings, array } from "../utils";
import { FormInput } from "../components";

export default function Edit() {
  const { invalid, placeholderName, placeholderAge, homeBtn, updateBtn } = strings;

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

  console.log(index);

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
      <FormInput
        name={name}
        age={age}
        handleChange={handleChange}
        setName={setName}
        setAge={setAge}
        handleSubmit={handleSubmit}
        updateBtn={updateBtn}
        homeBtn={homeBtn}
        placeholderName={placeholderName}
        placeholderAge={placeholderAge}
      />
    </>
  );
}
