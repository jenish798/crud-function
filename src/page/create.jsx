import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { ButtonComp, InputComp } from "../components";
import array from "../utils/data";
import strings from "../utils/commonString";

export default function Create({placeholderName,placeholderAge,homeBtn,invalid,submitBtn}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");


  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uni = ids.slice(0, 8);

    let a = name,
      b = age;
    if (name == "" || age == "") {
      alert(invalid);
      return;
    }
    array.push({ id: uni, Name: a, Age: b });

    history("/");
  };
  return (
    <div>
      <form>
        <InputComp
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder={placeholderName}
          required
        />
        <InputComp
          onChange={(e) => setAge(e.target.value)}
          type="number"
          required
          placeholder={placeholderAge}
        />

        <ButtonComp onClick={(e) => handleSubmit(e)} type="submit">
          {submitBtn}
        </ButtonComp>

        <Link to="/">
          <ButtonComp>{homeBtn}</ButtonComp>
        </Link>
      </form>
    </div>
  );
}

Create.defaultProps = {
  placeholderName: strings.placeholderName,
  placeholderAge: strings.placeholderAge,
  homeBtn: strings.homeBtn,
  invalid: strings.invalid,
  submitBtn: strings.submitBtn,
};
