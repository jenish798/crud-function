import React from "react";
import { UpdateButton, DeleteButton } from "..";

export const Table = ({
  array,
  setID,
  deleted,
  updateBtn,
  deleteBtn,
  headerName,
  headerAge
}) => {

  return (
    <table>
      <thead>
        <tr>
          <th>{headerName}</th>
          <th>{headerAge}</th>
        </tr>
      </thead>
      <tbody>
        {array?.map((item) => {
          return (
            <tr>
              <td>{item?.Name}</td>
              <td>{item?.Age}</td>
              <UpdateButton item={item} setID={setID} updateBtn={updateBtn} />

              <td>
                <DeleteButton
                  item={item}
                  deleted={deleted}
                  deleteBtn={deleteBtn}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
