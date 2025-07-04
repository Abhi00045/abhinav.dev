import React from "react";
import '../Components/Components.css'

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid #eaeaea",
    fontFamily: "sans-serif",

    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    backgroundColor: "white",
    zIndex: "1000",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  };

  const navLinks = {
    display: "flex",
    gap: "30px",
    fontSize: "16px",
    fontWeight: "500",
    textDecoration: "none",
  };

  const resumeBtn = {
    background: "black",
    color: "white",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  };

  return (
    <nav style={navStyle}>
      <div style={navLinks}>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Project</a>
        <a href="#contact">Contact Me</a>
      </div>
      <button style={resumeBtn}>Resume ⬇</button>
    </nav>
  );
};

export default Navbar;
