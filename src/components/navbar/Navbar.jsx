import "./navbar.css";
import logo from "../pictures/logo.jpeg";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar" id="top">
      <div className="navbar-div">
        <NavLink to="/">
          <img src={logo} className="logo" />
        </NavLink>
        <a className="say-hello" href="#contact">
          Say Hello
        </a>
      </div>
    </nav>
  );
};
