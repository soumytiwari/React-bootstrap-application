// component files first letter always in capital letter
import PropTypes from "prop-types";

// -------------------- react function based component  ------------------------------bg-body-dark
import React from "react";

export default function Navbar(props) {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.info}
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div>Hi I am a witch!</div>
    </>
  );
}

// -------------------- react function based component  ------------------------------

// -------------------- prop types, required, default -----------------------------
// sets type of prop, array, object, string..
// and sets compulsion to requirement/s
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string,
};

// sets default values for props
Navbar.defaultProps = {
  title: "Title here",
  info: "About us",
};
// -------------------- prop types, required, default -----------------------------
