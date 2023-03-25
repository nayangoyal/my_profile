import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand mx-4 my-0 fw-bold" to="/">Nayan@dev</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav fw-bolder">
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/projects">Projects</Link>
                  </li>
                  <li className="nav-item me-5">
                    <Link className="nav-link text-dark" to="/contacts">Contacts</Link>
                  </li>
                </ul>
              </div>
            </div>
        </nav>

    </div>
  )
}

export default Navbar
