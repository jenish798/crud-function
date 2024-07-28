import React from "react";
import { ButtonComp } from "../components";
import { Link } from "react-router-dom";

export const Table = ({
  headers,
  array,
  setID,
  deleted,
  updateBtn,
  deleteBtn,
}) => {
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
    </table>
  );
};
