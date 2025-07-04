import React from 'react';
import './Components.css';
import meBandW from '../assets/meBandW.jpg';
// import meClr from '../assets/meClr.jpg';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2 className="about-heading">👋 About Me</h2>
          <p className="about-subheading">Know more about my journey, passion, and projects.</p>

          <p>
            My name is <strong>Abhinav Reddy Rajidi</strong>, and I’m a software engineer and full-stack developer from Hyderabad.
            I build scalable, high-performance applications and platforms with a passion for great design, speed, and reliability.
          </p>

          <p>
            I specialize in the MERN stack and work extensively with modern technologies like Next.js, Clerk, google Cloud.
          </p>
          <p>
            I’m deeply motivated to get into Tech and constantly challenge myself with complex projects.
            My goal is to build Responsive Applications that are both functional and beautifully designed.
          </p>

          <p>
            Outside of coding, I love playing football ⚽, diving into the world of tech innovation, and occasionally watching shows like
            <em> The Walking Dead  and One piece</em> ☠.
          </p>
        </div>

        <div className="about-image">
          <img src={meBandW} alt="Abhinav" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
