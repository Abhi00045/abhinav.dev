import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import image from "../assets/okay.png"

const Hero = () => {
  const container = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "70px",
    paddingBottom: "10px",
    paddingLeft: "40px",
    paddingRight: "40px",
    fontFamily: "sans-serif",
    marginBottom: "0",
  };

  const left = {
    width: "60%",
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
          <a href="https://x.com/rabhinavreddie"><div style={icon}><FaSquareXTwitter /></div></a>
          <a href="https://discord.com/channels/@me"><div style={icon}><FaDiscord /></div></a>
          <a href="https://www.linkedin.com/in/abhinavreddy-rajidi-988633280/"><div style={icon}><FaLinkedin /></div></a>
          <a href="https://github.com/Abhi00045"><div style={icon}><FaGithub /></div></a>
        </div>
      </div>
      <div style={right}>
        <img
          src={image}
          alt="developer"
          style={{ width: "80%", height: "auto" }}
        />
        <hr />
        
      </div>
    </section>
  );
};

export default Hero;
