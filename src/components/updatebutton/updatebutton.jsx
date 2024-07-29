import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComp from '../button/Button'; 

const UpdateButton = ({ item, setID, updateBtn }) => {
  return (
    <td>
      <Link to={`/edit`}>
        <ButtonComp
          onClick={() => setID(item.id, item.Name, item.Age)}
          name={updateBtn}
        />
      </Link>
    </td>
  );
};

export default UpdateButton;