import React from "react";

export default function Navbar() {
  return (
    // <div>
    //   <nav className="navbar" style={{ backgroundColor: "#41B3A3" }}>
    //     <ul className="nav">
    //       <li className="nav-item">
    //         <a className="nav-link active" aria-current="page" href="#">
    //           Feeds
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">
    //           Upload
    //         </a>
    //       </li>
    //     </ul>
    //     <ul className="navbar-nav ms-auto">
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">
    //           History
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>

    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand abs" href="#">
          L&F
        </a>
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
              <a className="nav-link" href="#">
                Feeds
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#myAlert" data-bs-toggle="collapse">
                Upload
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href=""
                data-bs-target="#myModal"
                data-bs-toggle="modal">
                <i
                  className="bi bi-clock-history"
                  style={{ fontSize: "25px" }}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
