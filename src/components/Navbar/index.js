import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand mb-0 h1" to="/">
        Caitlin Mulcahy
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" idName="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/Portfolio"
              className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
        </ul>
        <div>
          <a href="https://www.linkedin.com/in/caitlin-mulcahy-a4312b1a1/">
              <i className="fa fa-linkedin-square mr-sm-2 form-inline icon"></i>
          </a>
          <a href="https://github.com/CaitlinMaxx">
            <i className="fa fa-github mr-sm-2 form-inline icon"></i>
          </a>    
        </div>
      </div>
    </nav>
  );
}

export default Navbar;