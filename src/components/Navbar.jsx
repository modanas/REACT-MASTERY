import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({
  toggleMode,
  mode,
  title = "TextUtils",
  aboutText = "About",
}) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}
      style={{ position: "relative" }} 
    >
      <button
        onClick={toggleMode}
        className="btn btn-outline-secondary d-none d-lg-flex align-items-center"
        style={{
          position: "absolute",
          top: 12,
          right: 18,
          border: "none",
          background: "none",
          zIndex: 1042, 
        }}
        aria-label={mode === "light" ? "Enable dark mode" : "Enable light mode"}
      >
        {mode === "light" ? (
          <FaMoon size={22} color="#333" />
        ) : (
          <FaSun size={22} color="#fff" />
        )}
      </button>

      <div className="container-fluid">
        {/* Brand on the left */}
        <Link className="navbar-brand" to="/">
          {title}
        </Link>

        {/* Hamburger + Theme Toggle (mobile only) */}
        <div className="d-flex align-items-center d-lg-none" style={{ gap: "0.5rem" }}>
          {/* Theme toggle (mobile only) */}
          <button
            onClick={toggleMode}
            className="btn btn-outline-secondary d-flex align-items-center"
            style={{ border: "none", background: "none" }}
            aria-label={mode === "light" ? "Enable dark mode" : "Enable light mode"}
          >
            {mode === "light" ? (
              <FaMoon size={22} color="#333" />
            ) : (
              <FaSun size={22} color="#fff" /> 
            )}
          </button>
          {/* Hamburger */}
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
        </div>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {aboutText}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(["light", "dark"]).isRequired,
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

