import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import image from "../assets/okay.png"
import "./Components.css"

const Hero = () => {
  // const container = {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   paddingTop: "70px",
  //   paddingBottom: "30px",
  //   paddingLeft: "70px",
  //   paddingRight: "70px",
  //   fontFamily: "sans-serif",
  //   marginBottom: "0",
  // };

  // const left = {
  //   width: "60%",
  // };

  // const heading = {
  //   fontSize: "40px",
  //   fontWeight: "400",
  //   marginBottom: "20px",
  //   lineHeight: "1.3",
  // };

  // const highlight = {
  //   fontWeight: "700",
  // };

  // const outlineText = {
  //   fontWeight: "700",
  //   WebkitTextStroke: "1px black",
  //   color: "white",
  // };

  // const paragraph = {
  //   color: "#777",
  //   fontSize: "14px",
  //   marginTop: "10px",
  //   maxWidth: "480px",
  //   lineHeight: "1.5",
  // };

  // const socials = {
  //   marginTop: "40px",
  //   display: "flex",
  //   gap: "15px",
  // };

  // const icon = {
  //   width: "40px",
  //   height: "40px",
  //   backgroundColor: "#000",
  //   color: "#fff",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderRadius: "6px",
  //   fontSize: "20px",
  //   cursor: "pointer",
  // };

  // const right = {
  //   maxWidth: "45%",
  // };

  return (
    <section className="container">
      <div className="left">
        <h1 className="heading">
          Hello I’am <span className="highlight">Abhinav Reddy Rajidi</span> <br />
          <span className="highlight">Mern Stack</span>{" "}
          <span className="outlineText">Developer</span> <br />
          Based In <span className="highlight">India.</span>
        </h1>
        <p className="paragraph">
        I create  responsive websites.
        Building robust web applications with Typescript, Next.js,
        MongoDB, Express.js, React, and Node.js
        </p>
        <div className="socials">
          <a href="https://x.com/rabhinavreddie"><div className="icon"><FaSquareXTwitter /></div></a>
          <a href="https://discord.com/channels/@me"><div className="icon"><FaDiscord /></div></a>
          <a href="https://www.linkedin.com/in/abhinavreddy-rajidi-988633280/"><div className="icon"><FaLinkedin /></div></a>
          <a href="https://github.com/Abhi00045"><div className="icon"><FaGithub /></div></a>
        </div>
      </div>
      <div className="right">
        <img
          src='https://64.media.tumblr.com/d49419c0d1bd888939252a3277d54295/5ad83a192c0f9455-9c/s500x750/f40a14dfbf1c0af07c247f71651d703ea0651b79.gif'
          alt="developer"
          style={{ width: "80%", height: "auto" }}
        />
        {/* <hr /> */}
        
      </div>
    </section>
  );
};

export default Hero;
