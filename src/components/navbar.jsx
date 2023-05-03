import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../state/dataContext";

function NavBar() {
  const cart = useContext(DataContext).cart;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand mainTitle" to="/">
          The Tavern
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">
                My List
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            <Link to="/cart" className="btn btn-small">
              {cart.length} Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
