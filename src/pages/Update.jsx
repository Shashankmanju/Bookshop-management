import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  // State to manage the book data
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  // State to manage error status during update
  const [error, setError] = useState(false);

  // React Router hooks for navigation and location
  const location = useLocation();
  const navigate = useNavigate();

  // Extracting the bookId from the current URL
  const bookId = location.pathname.split("/")[2];

  // Function to handle changes in input fields
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Function to handle the update button click
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      // Making a PUT request to update the book on the server
      await axios.put(`http://localhost:8800/books/${bookId}`, book);
      // Navigating to the home page after successful update
      navigate("/");
    } catch (err) {
      console.log(err);
      // Setting error state to true if there's an error during the update
      setError(true);
    }
  };

  // JSX rendering of the Update component
  return (
    <div className="form">
      <h1>Update the Book</h1>
      {/* Input fields for updating book information */}
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Book desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book cover"
        name="cover"
        onChange={handleChange}
      />
      <div className="formbutton">
        {/* Button to trigger the update process */}
        <button className="btn" onClick={handleClick}>
          Update
        </button>
      </div>
      
      {/* Displaying an error message if there was an error during the update */}
      {error && "Something went wrong!"}

      {/* Link to navigate back to the home page */}
      <Link to="/" className="link-style">
        See all books
      </Link>
    </div>
  );
};

export default Update;
