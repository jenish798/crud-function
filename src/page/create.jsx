import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import array from "../utils/data";
import strings from "../utils/commonString";
import { handleChange } from "../App";
import { FormInput } from "../App";

export default function Create() {
  const { placeholderName, placeholderAge, homeBtn, invalid, submitBtn } =
    strings;

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
      <FormInput
        name={name}
        age={age}
        handleChange={handleChange}
        setName={setName}
        setAge={setAge}
        handleSubmit={handleSubmit}
        updateBtn={submitBtn}
        homeBtn={homeBtn}
        submitBtn={submitBtn}
        placeholderName={placeholderName}
        placeholderAge={placeholderAge}
      />
    </div>
  );
}
