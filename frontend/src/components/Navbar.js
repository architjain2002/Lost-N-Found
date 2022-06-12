import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: "#41B3A3" }}>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Feeds
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Upload
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              History
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
