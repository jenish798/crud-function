import { Link, useNavigate } from "react-router-dom";
import ButtonComp from "../components/button/Button";
import { strings, array } from "../utils";
import { Table } from "../components";

export default function Home() {
  const { headerName, headerAge, updateBtn, deleteBtn, createName } = strings;

  let history = useNavigate();

  let create = useNavigate();

  const created = () => {
    create("/create");
  };

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
        headerName={headerName}
        headerAge={headerAge}
        array={array}
        setID={setID}
        deleted={deleted}
        updateBtn={updateBtn}
        deleteBtn={deleteBtn}
      />
      <ButtonComp onClick={created} name={createName} />
    </div>
  );
}
