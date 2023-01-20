import React from "react";

const ReadOnlyRow = ({ bookstock, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{bookstock.bookName}</td>
      <td>{bookstock.bookAuthor}</td>
      <td>{bookstock.bookQuantity}</td>

      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, bookstock)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(bookstock.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;

