import React from 'react';
import ButtonComp from '../button/Button';

const DeleteButton = ({ item, deleted, deleteBtn }) => {
  return (
    <td>
      <ButtonComp
        onClick={() => deleted(item.id)}
        name={deleteBtn}
      />
    </td>
  );
};

export default DeleteButton;