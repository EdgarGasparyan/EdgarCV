import React from "react";
import "./experiance.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experiance = () => {
  return (
    <section id="experiance">
      <h5>What Skills I Have</h5>
      <h2>My Experiance</h2>
      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Frontend Development</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
				<article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Redux Toolkit</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
				<article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
				<article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>MUI</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
				<article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>CHAKRA UI</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
				<article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>CHARTS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
				<article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>SWIPER</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experiance__backend">
          <h3>Personal Skills </h3>

          <div className="experiance__content">
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Comunicative</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Time Managment</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Team Member</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Responsible</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Detail Oriented</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Punctual</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
