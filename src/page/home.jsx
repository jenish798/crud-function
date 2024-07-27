import { Link, useNavigate } from "react-router-dom";
import array from "../utils/data";
import ButtonComp from "../components/button/Button";
import strings from "../utils/commonString";
import { Table } from "../App";

export default function Home() {
  const { headerName, headerAge, updateBtn, deleteBtn, createName } = strings;

  let history = useNavigate();

  function setID(id, name, age) {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
  }

  function deleted(id) {
    let index = array
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    array.splice(index, 1);

    history("/");
  }
  return (
    <div>
      <Table
        headers={{ headerName: "Name", headerAge: "Age" }}
        array={array}
        setID={setID}
        deleted={deleted}
        updateBtn="Update"
        deleteBtn="Delete"
      />
      <Link to="./create">
        <ButtonComp>{createName}</ButtonComp>
      </Link>
    </div>
  );
}
