import React from "react"; // Importing React library to create React components
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importing necessary components from react-router-dom for routing
import Add from "./pages/Add"; // Importing Add component
import Books from "./pages/Books"; // Importing Books component
import Update from "./pages/Update"; // Importing Update component
import "./style.css"; // Importing CSS styles for the app

function App() { // Defining the main App component
  return (
    <div className="app"> {/* Main container div with class 'app' */}
      <BrowserRouter> {/* BrowserRouter component to enable routing */}
        <Routes> {/* Routes component to define different routes */}
          <Route path="/" element={<Books />} /> {/* Route for the Books component, accessible at the root path */}
          <Route path="/add" element={<Add />} /> {/* Route for the Add component, accessible at '/add' path */}
          <Route path="/update/:id" element={<Update />} /> {/* Route for the Update component, with a parameter ':id' in the path */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; // Exporting the App component as the default export
