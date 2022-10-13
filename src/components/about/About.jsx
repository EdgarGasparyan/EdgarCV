import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          {/*<div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiance</h5>
              <small>3+ Years Working </small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Client</h5>
              <small>3+ Years Working </small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Years Working </small>
            </article>
          </div>*/}
          <p>
            A self- motivated and creative web- developer graduate skilled at
            writing efficient and welldesigned codes using current best
            practices in Web development. Fast learner, hard-worker and team
            worker.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
