import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/kpmg-logo.png";
import calenderIcon from "../../assets/images/calender-icon.png";
import userIcon from "../../assets/images/user-icon.png";

const PageHeader = () => {
  return (
    <header className="sticky-top container-fluid px-0">
      <nav className="navbar navbar-expand-lg navbar-dark kpmg-blue p-3">
        <Link to="landing" className="navbar-brand">
          <img
            src={logo}
            alt="kpmg-logo"
            className="img-fluid"
            style={{ maxWidth: "100px", maxHeight: "50px" }}
          />
        </Link>
        <button
          className="navbar-toggler btn-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-3">
              <NavLink to="training" className="nav-link fs-6">
                <p className="navbar-fontsize">Training</p>
              </NavLink>
            </li>
            <li className="nav-item ms-3">
              <NavLink to="qna" className="nav-link fs-6">
                <p className="navbar-fontsize">FAQ</p>
              </NavLink>
            </li>
            <li className="nav-item ms-3">
              <NavLink to="colleagues" className="nav-link fs-6">
                <p className="navbar-fontsize">Colleagues</p>
              </NavLink>
            </li>
            <li className="nav-item ms-3">
              <NavLink to="about" className="nav-link fs-6">
                <p className="navbar-fontsize">About Us</p>
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item ms-3">
              <NavLink to="calendar" className="nav-link fs-6">
                <img
                  src={calenderIcon}
                  alt="calender-icon"
                  style={{ width: "32px", height: "32px" }}
                />
              </NavLink>
            </li>
            <li className="nav-item ms-3">
              <NavLink to="profile" className="nav-link fs-6">
                <img
                  src={userIcon}
                  alt="user avatar"
                  style={{ width: "32px", height: "32px" }}
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default PageHeader;
