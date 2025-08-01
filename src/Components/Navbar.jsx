import React, { useState } from "react";
import "../Components/Components.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#about">About Me</a>
        <hr />
        <a href="#skills">Skills</a>
        <hr />
        <a href="#projects">Project</a>
        {/* <a href="#contact">Contact Me</a> */}
      </div>

      {/* <div className="resume-desktop">
        <button className="resume-btn">Resume ⬇</button>
      </div> */}

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a onClick={toggleMenu} href="#about">About Me</a>
          <a onClick={toggleMenu} href="#skills">Skills</a>
          <a onClick={toggleMenu} href="#projects">Project</a>
          {/* <button className="resume-btn">Resume ⬇</button> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
