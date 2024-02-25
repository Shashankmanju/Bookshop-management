import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  // State variables using useState hook
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [error, setError] = useState(false);

  // useNavigate hook from react-router-dom for navigation
  const navigate = useNavigate();

  // Function to handle changes in input fields and update the book state
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Function to handle the "Add" button click
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // Sending a POST request to add a new book using axios
      await axios.post("http://localhost:8800/books", book);
      // If successful, navigate to the home page
      navigate("/");
    } catch (err) {
      // If an error occurs during the request, log the error and set error state to true
      console.log(err);
      setError(true);
    }
  };

  // Component rendering with JSX
  return (
    <div className="form">
      <h1>Add New Book</h1>
      {/* Input fields for book information with onChange event to handle changes */}
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
      {/* "Add" button with onClick event to trigger the handleClick function */}
      <button onClick={handleClick}>Add</button>
      {/* Display an error message if error state is true */}
      {error && "Something went wrong!"}
      {/* Link to navigate to the home page */}
      <Link to="/">See all books</Link>
    </div>
  );
};

export default Add;
