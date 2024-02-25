import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  // State to store the list of books
  const [books, setBooks] = useState([]);
  // State to store the search term for filtering books
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect to fetch all books from the server when the component mounts
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    // Invoke the fetchAllBooks function when the component mounts
    fetchAllBooks();
  }, []); // The empty dependency array means this effect runs once after the initial render

  // Function to handle book deletion
  const handleDelete = async (id) => {
    try {
      // Delete the book with the specified id from the server
      await axios.delete(`http://localhost:8800/books/${id}`);
      // Reload the window to reflect the changes after deletion
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  // Function to handle search term input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter books based on the search term
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Book Shop</h1>
      <div>
        {/* Input for searching books */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="books">
        {/* Map through filtered books and display book details */}
        {filteredBooks.map((book) => (
          <div key={book.id} className="book">
            <img src="https://clipart-library.com/images/6Tpo6G8TE.jpg" alt="" />
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>Rs:{book.price}</span>
            {/* Button to delete the book */}
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            {/* Button to update the book, linking to the update route */}
            <button className="update">
              <Link
                to={`/update/${book.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>
      {/* Button to navigate to the "Add new book" route */}
      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link>
      </button>

      
     
      <div className="copyright">
        <p>&copy; 2024 Shashank M. All rights reserved.</p>
      </div>
       
        </div>
     
    
  );
};

export default Books;
