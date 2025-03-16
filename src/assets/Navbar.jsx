import React from 'react';
import Logo from "../image/logo.png";

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="logo"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto px-lg-3">
              <a className="nav-link" aria-current="page" href="#">
                CATALOGUE
              </a>
              <a className="nav-link" href="#">
                FASHION
              </a>
              <a className="nav-link" href="#">
                FAVOURITE
              </a>
              <a className="nav-link" aria-disabled="true">
                LIFESTYLE
              </a>
            </div>
            <button type="button" class="btn btn-dark">SIGN UP</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar