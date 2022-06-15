import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid">
        <Link
          to="feeds"
          className="navbar-brand abs"
          href="#"
          style={{ fontSize: "20px" }}>
          L&F
        </Link>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="collapseNavbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link
                to="/feeds"
                className="nav-link"
                style={{ fontSize: "20px" }}>
                Feeds
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/upload"
                className="nav-link"
                // data-bs-toggle="collapse"
                style={{ fontSize: "20px" }}>
                Upload
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item p-2">
              <a
                className="nav-link"
                href="#"
                data-bs-target="#myModal"
                data-bs-toggle="modal">
                <i
                  className="bi bi-clock-history"
                  style={{ fontSize: "25px" }}></i>
              </a>
            </li>
            <li className="nav-item p-2">
              <button
                type="button"
                className="btn btn-outline-light"
                style={{ fontSize: "20px" }}>
                Login
              </button>
            </li>
            <li className="nav-item p-2">
              <a
                className="nav-link"
                href="#"
                data-bs-target="#myModal"
                data-bs-toggle="modal">
                <i
                  className="bi bi-person-circle"
                  style={{ fontSize: "25px" }}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
