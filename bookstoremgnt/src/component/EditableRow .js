const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
  }) => {
    return (
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Book Name."
            name="bookname"
            value={editFormData.bookname}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Book Author"
            name="bookauthor"
            value={editFormData.bookauthor}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Quantity"
            name="bookquantity"
            value={editFormData.bookquantity}
            onChange={handleEditFormChange}
          ></input>
        </td>
         <td>
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </td>
      </tr>
    );
  };

  export default EditableRow;
