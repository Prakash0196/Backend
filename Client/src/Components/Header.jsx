import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const Navbar = () => {


    const {isLoggedIn, user} = useAuth()
    console.log("🚀 ~ Navbar ~ user:", user?.isAdmin)

   
       const admin = user?.isAdmin || false




  return (
    <header className="section-navbar">
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="index.html">
            <img
              src="./logo.png"
              width="80%"
              height="auto"
              alt="Education_logo"
            />
          </NavLink>
        </div>
        <nav className="navbar">
          <li className="navitem">
            <NavLink to="/" className="nav-link">home</NavLink>
          </li>
          <li className="navitem">
            <NavLink to="/about" className="nav-link">about</NavLink>
          </li>
          <li className="navitem">
            <NavLink to="/service" className="nav-link">services</NavLink>
          </li>
          {isLoggedIn ?  <li className="navitem">
            <NavLink to="/logout" className="nav-link">logout</NavLink>
          </li>:  <><li className="navitem">
            <NavLink to="/register" className="nav-link">register</NavLink>
          </li>
            <li className="navitem">
              <NavLink to="/login" className="nav-link">login</NavLink>
            </li></> }

            {
              admin && <li className="navitem">
            <NavLink to="/admin" className="nav-link">Admin</NavLink>
          </li>
            }


          <li className="navitem">
            <NavLink to="/contact" className="nav-link">contact</NavLink>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
