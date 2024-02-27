import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
          
          <div className="d-flex justify-content-end">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;