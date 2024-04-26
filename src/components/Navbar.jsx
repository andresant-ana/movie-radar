import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "../img/logo.png";

import "../components/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="menu">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/movies/1" className="menu-item-movies">
            Movies
          </Link>
          <Link to="/tv-shows/1" className="menu-item">
            TV Shows
          </Link>
        </div>
        <form>
          <input type="text" placeholder="Search a movie or TV show" />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
