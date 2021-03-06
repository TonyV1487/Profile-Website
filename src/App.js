import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "./components/Nav";
import About from "./components/About";

// BAE assets
import Meeting from "./assets/BAE/Meeting.jpg";

// Logo assets
import ReactLogo from "./assets/logos/React_txt.png";
import CSSLogo from "./assets/logos/CSS.png";
import ExpJSLogo from "./assets/logos/expressJS.png";
import GitHubLogo from "./assets/logos/GitHub.png";
import htmlLogo from "./assets/logos/HTML.png";
import jsLogo from "./assets/logos/JS.png";
import mongoDBLogo from "./assets/logos/MongoDB.png";
import mongooseLogo from "./assets/logos/Mongoose.png";
import nodejsLogo from "./assets/logos/NodeJS.png";
import passportLogo from "./assets/logos/Passport.png";
import tailwindLogo from "./assets/logos/Tailwind.png";
import tinyMCELogo from "./assets/logos/tinyMCE.png";
import dotenv from "./assets/logos/dotenv.png";
import eslint from "./assets/logos/eslint.png";
import handlebars from "./assets/logos/handlebars.png";
import mysql from "./assets/logos/MySQL.png";
import sequelize from "./assets/logos/sequelize.png";
import jquery from "./assets/logos/jquery.png";
import ajax from "./assets/logos/ajax.png";

// SoVest assets
import sovest from "./assets/SoVest/SoVest.png";

// Cocktail Creator assets
import cocktailcreator from "./assets/CocktaiCreator/cocktailcreator.jpg";

library.add(fab, faEnvelopeSquare);

function App() {
  return (
    <div className="container-fluid">
      <Nav />
      <About />

      <div className="row projects d-flex justify-content-center" id="projects">
        <div className="card proj-card w-75 shadow">
          <div className="card-body">
            <div className="proj-title">BAE</div>
            <div className="d-flex justify-content-center border-bottom">
              <img src={Meeting} alt="Meeting" className="w-50 py-4"></img>
            </div>
            <div className="d-flex justify-content-center">
              <p className="proj-text text-center pt-2 ">
                A meeting management app that provides users the ability to vote
                on agenda items, setting priority prior to the meeting. Those
                items with negative scores move to the Be An Email section and
                are covered outside the meeting.
              </p>
            </div>
            <div className="d-flex justify-content-center border-bottom">
              <p className="proj-text text-center pt-2 ">
                Login - testuser@gmail<br></br>Password - user123
              </p>
            </div>
            <div className="tech d-flex justify-content-around flex-wrap py-4 border-bottom">
              <img src={htmlLogo} alt="HTML" className="proj-tech-logo"></img>
              <img src={CSSLogo} alt="CSS" className="proj-tech-logo"></img>
              <img
                src={jsLogo}
                alt="Javascript"
                className="proj-tech-logo"
              ></img>
              <img src={ReactLogo} alt="React" className="proj-tech-logo"></img>
              <img
                src={nodejsLogo}
                alt="NodeJS"
                className="proj-tech-logo"
              ></img>
              <img
                src={ExpJSLogo}
                alt="ExpressJS"
                className="proj-tech-logo"
              ></img>
              <img
                src={GitHubLogo}
                alt="GitHub"
                className="proj-tech-logo"
              ></img>

              <img
                src={mongoDBLogo}
                alt="MongoDB"
                className="proj-tech-logo"
              ></img>
              <img
                src={mongooseLogo}
                alt="Mongoose"
                className="proj-tech-logo"
              ></img>

              <img
                src={passportLogo}
                alt="Passport"
                className="proj-tech-logo"
              ></img>
              <img
                src={tailwindLogo}
                alt="Tailwind"
                className="proj-tech-logo"
              ></img>
              <img
                src={tinyMCELogo}
                alt="tinyMCE"
                className="proj-tech-logo"
              ></img>
            </div>

            <div className="d-flex proj-links justify-content-around py-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Could-this-have-been-an-email/bae.meet.ai"
              >
                <button type="button" className="btn btn-secondary">
                  Repo
                </button>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mern-bae.herokuapp.com/"
              >
                <button type="button" className="btn btn-secondary">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card proj-card w-75 shadow">
          <div className="card-body">
            <div className="proj-title">SoVest</div>
            <div className="d-flex justify-content-center border-bottom py-4">
              <img src={sovest} className="w-50" alt="SoVest"></img>
            </div>
            <div className="d-flex justify-content-center border-bottom py-4">
              <p className="proj-text text-center pt-2">
                An app that tracks the influence of social media influencers on
                stock market valuations
              </p>
            </div>
            <div className="tech d-flex justify-content-around flex-wrap py-2 border-bottom py-4">
              <img src={htmlLogo} alt="HTML" className="proj-tech-logo"></img>
              <img src={CSSLogo} alt="CSS" className="proj-tech-logo"></img>
              <img
                src={jsLogo}
                alt="Javascript"
                className="proj-tech-logo"
              ></img>
              <img
                src={handlebars}
                alt="Handlebars"
                className="proj-tech-logo"
              ></img>

              <img
                src={nodejsLogo}
                alt="NodeJS"
                className="proj-tech-logo"
              ></img>
              <img
                src={ExpJSLogo}
                alt="Express"
                className="proj-tech-logo"
              ></img>
              <img
                src={GitHubLogo}
                alt="GitHub"
                className="proj-tech-logo"
              ></img>
              <img src={mysql} alt="MySQL" className="proj-tech-logo"></img>
              <img
                src={sequelize}
                alt="Sequelize"
                className="proj-tech-logo"
              ></img>
              <img src={eslint} alt="es lint" className="proj-tech-logo"></img>
              <img src={dotenv} alt=".ENV" className="proj-tech-logo"></img>
            </div>

            <div className="d-flex proj-links justify-content-around py-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/iedson/sovest"
              >
                <button type="button" className="btn btn-secondary">
                  Repo
                </button>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://sovest.herokuapp.com/"
              >
                <button type="button" className="btn btn-secondary">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card proj-card w-75 shadow">
          <div className="card-body">
            <div className="proj-title">Cocktail Creator</div>
            <div className="d-flex justify-content-center border-bottom py-4">
              <img
                src={cocktailcreator}
                className="w-50"
                alt="Cocktail Creator"
              ></img>
            </div>
            <div className="d-flex justify-content-center border-bottom py-4">
              <p className="proj-text">
                A website that allows the user to select a liquor or ingredient
                they have and list all of the drinks they can make with
                available ingredients
              </p>
            </div>
            <div className="tech d-flex justify-content-around flex-wrap py-2 border-bottom py-4">
              <img src={htmlLogo} alt="HTML" className="proj-tech-logo"></img>
              <img src={CSSLogo} alt="CSS" className="proj-tech-logo"></img>
              <img
                src={jsLogo}
                alt="Javascript"
                className="proj-tech-logo"
              ></img>
              <img src={jquery} alt="jQuery" className="proj-tech-logo"></img>
              <img src={ajax} alt="AJAX" className="proj-tech-logo"></img>

              <img
                src={GitHubLogo}
                alt="GitHub"
                className="proj-tech-logo"
              ></img>
            </div>

            <div className="d-flex proj-links justify-content-around py-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/TonyV1487/Cocktail-Creator"
              >
                <button type="button" className="btn btn-secondary">
                  Repo
                </button>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://tonyv1487.github.io/Cocktail-Creator/"
              >
                <button type="button" className="btn btn-secondary">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row contact d-flex justify-content-center" id="contact">
        <div className="contact-body d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-center">
            <h2>Contact Me</h2>
          </div>
          <div className="row">
            <h6>
              I am currently considering all career and project opportunities!
              Please, feel free to use any of the contact methods below.
            </h6>
          </div>
          <div className="d-flex flex-row justify-content-around">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/TonyV1487"
            >
              <div className="p-2">
                {" "}
                <FontAwesomeIcon
                  className="contact-item"
                  icon={["fab", "github-square"]}
                  size="4x"
                />
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/anthonyvester/"
            >
              <div className="p-2">
                {" "}
                <FontAwesomeIcon
                  className="contact-item"
                  icon={["fab", "linkedin"]}
                  size="4x"
                />
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:tvester1487@gmail.com"
            >
              <div className="p-2">
                {" "}
                <FontAwesomeIcon
                  className="contact-item"
                  icon="envelope-square"
                  size="4x"
                />
              </div>
            </a>
          </div>
          <form className="contact-form"></form>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center row footer">
        <a href="#nav">Back To Top</a>
      </div>
    </div>
  );
}

export default App;
