import React from "react";
import { Link } from "react-router-dom";
import Background from "../Background";

function Navbar({ themeColor, setThemeColor }) {
  return (
    <nav style={{ background: themeColor }}>
      <div className="container d-flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/props">Props</Link>
        <Link to="/usestates">Usestates</Link>

        {/* Dropdown Start */}
        <div className="dropdown">
          <button
            className="btn btn-link text-white dropdown-toggle"
            data-bs-toggle="dropdown"
            type="button"
          >
            API
          </button>

          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/cruds">
                Crud 1
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/cruds-2">
                Crud 2
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/ApiIntegration">
                API-Integration
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/calculator">Calculator</Link>
        {/* Dropdown End */}
        {/* <ul className="ms-auto">
          <li>
            <Link className="dropdown-item" to="/crud3">
              <input type="color" />
            </Link>
          </li>
        </ul> */}
        <div className="cl">
          {" "}
          <input
            type="color"
            className="colorbox"
            placeholder="color"
            value={themeColor}
            onChange={(e) => setThemeColor(e.target.value)}
          />
          <label style={{ color: "#fff" }}>Color Theme</label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
