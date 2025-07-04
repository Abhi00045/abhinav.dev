import React from "react";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid #eaeaea",
    fontFamily: "sans-serif",
  };

  const logoStyle = {
    fontWeight: "bold",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const navLinks = {
    display: "flex",
    gap: "30px",
    fontSize: "16px",
    fontWeight: "500",
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
      <div style={logoStyle}>
        <img src="/logo.svg" alt="Logo" height="24" />
        Personal
      </div>
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
