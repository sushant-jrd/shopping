// type rfc for snippet
import React from "react";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import { FaShoppingCart } from "react-icons/fa";

import PropTypes from "prop-types";
import { BiColorFill } from "react-icons/bi";
import { FaFill } from "react-icons/fa/index.esm";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.NavbarTitle}
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
                  {props.NavbarHome}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.NavbarAbout}
                </a>
              </li>
            </ul>
            {/* <FontAwesomeIcon icon="cart"></FontAwesomeIcon> */}

            <FaShoppingCart color="white" fontSize="25px"  />
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  NavbarTitle: PropTypes.string.isRequired,
  NavbarAbout: PropTypes.string.isRequired,
  NavbarHome: PropTypes.string.isRequired,
  NavbarSearch: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  NavbarTitle: "Navbar Title",
  NavbarAbout: "Navbar About",
  NavbarHome: "Navbar Home",
  NavbarSearch: "Navbar Search ",
};
