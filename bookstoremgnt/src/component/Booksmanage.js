import React, { useState, Fragment,useEffect } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import "../App.css";

import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow ";

const Bookmanage = () => {
    const [bookdata, setData] = useState([]);


    useEffect(() => {
        async function  fetchData() {
            let res = await axios.get('http://127.0.0.1:3001/bookstock');

            console.log(res.data);
            setData(res.data)
   }

        fetchData()

    },[])



   console.log(bookdata);
  const [addFormData, setAddFormData] = useState({
    bookname: "",
    bookauthor: "",
    bookquantity: "",

  });
  const [editFormData, setEditFormData] = useState({
    bookname: "",
    bookauthor: "",
    bookquantity: "",

  });

  const [editBookId, setEditBookId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("bookname");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("bookname");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      id: nanoid(),
      bookname: editFormData.bookname,
      bookauthor: editFormData.bookauthor,
      bookquantity: editFormData.bookquantity,
    };

    const newbookdata = [...bookdata, newBook];
    setData(newbookdata);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedBook= {
      id: editBookId,
      bookname: editFormData.bookname,
      bookauthor: editFormData.bookauthor,
      bookquantity: editFormData.bookquantity,

    };

    const newbookdata = [...bookdata];

    const index =  bookdata.findIndex((bookdata) =>bookdata.id === editBookId);

    newbookdata[index] = editedBook;

    newbookdata(newbookdata);
    setEditBookId(null);
  };

  const handleEditClick = (event, bookdata) => {
    event.preventDefault();
    setEditBookId(bookdata.id);

    const formValues = {
        bookname: bookdata.bookname,
        bookauthor: bookdata.bookauthor,
        bookquantity: bookdata.bookquantity,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditBookId(null);
  };

  const handleDeleteClick = (bookdataId) => {
    const newbookdata = [...bookdata];

    const index =  bookdata.findIndex((bookdata) =>bookdata.id === bookdataId);

    newbookdata.splice(index, 1);

    newbookdata(newbookdata);
  };

  return (
    <div >
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Book Author</th>
              <th>Quantity</th>

            </tr>
          </thead>
          <tbody>
            { bookdata.map((bookdata) => (
              <Fragment>
                {editBookId === bookdata.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    bookdata={bookdata}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Book</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="bookname"
          required="required"
          placeholder="Book name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="bookauthor"
          required="required"
          placeholder="Book author.."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="bookquantity"
          required="required"
          placeholder="Quantity.."
          onChange={handleAddFormChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Bookmanage;

