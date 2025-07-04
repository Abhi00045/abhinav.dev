import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";

const Hero = () => {
  const container = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "60px 40px",
    fontFamily: "sans-serif",
  };

  const left = {
    maxWidth: "50%",
  };

  const heading = {
    fontSize: "40px",
    fontWeight: "400",
    marginBottom: "20px",
    lineHeight: "1.3",
  };

  const highlight = {
    fontWeight: "700",
  };

  const outlineText = {
    fontWeight: "700",
    WebkitTextStroke: "1px black",
    color: "white",
  };

  const paragraph = {
    color: "#777",
    fontSize: "14px",
    marginTop: "10px",
    maxWidth: "480px",
    lineHeight: "1.5",
  };

  const socials = {
    marginTop: "40px",
    display: "flex",
    gap: "15px",
  };

  const icon = {
    width: "40px",
    height: "40px",
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px",
    fontSize: "20px",
    cursor: "pointer",
  };

  const right = {
    maxWidth: "45%",
  };

  return (
    <section style={container}>
      <div style={left}>
        <h1 style={heading}>
          Hello I’am <span style={highlight}>Abhinav Reddy Rajidi</span> <br />
          <span style={highlight}>Mern Stack</span>{" "}
          <span style={outlineText}>Developer</span> <br />
          Based In <span style={highlight}>India.</span>
        </h1>
        <p style={paragraph}>
        I create  responsive websites.
        Building robust web applications with Typescript, Next.js,
        MongoDB, Express.js, React, and Node.js
        </p>
        <div style={socials}>
          <div style={icon}><FaSquareXTwitter /></div>
          <div style={icon}>⛁</div>
          <div style={icon}>🐦</div>
          <div style={icon}>💬</div>
        </div>
      </div>
      <div style={right}>
        <img
          src="/developer-illustration.svg"
          alt="developer"
          style={{ width: "100%", height: "auto" }}
        />
        
      </div>
    </section>
  );
};

export default Hero;
