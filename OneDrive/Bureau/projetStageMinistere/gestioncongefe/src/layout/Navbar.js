import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Add your search logic here
    console.log("Search submitted:", searchValue);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        
      
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchChange}
            className="form-control me-2"
          />
          <button
            className="btn btn-outline-light"
            onClick={handleSearchSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
