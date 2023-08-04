import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-left">
        <span>Gabriel Amadé</span>
      </div>
      <div className="navbar-right">
        <a href="#aboutme">À Propos</a>
        <a href="#experiences">Expériences</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
      <div className="navbar-underline"></div>
      </>
  );
};

export default Navbar;
