import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "./components/Nav";
import About from "./components/About";
import Meeting from "./assets/BAE/Meeting.jpg";
import Agenda from "./assets/BAE/Agenda.jpg";
import Vote from "./assets/BAE/Vote.jpg";
import User from "./assets/BAE/User.jpg";
// import JSlogo from "./assets/";
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

library.add(fab, faEnvelopeSquare);

function App() {
  return (
    <div className="container-fluid">
      <Nav />
      <About />

      <div className="row projects d-flex justify-content-center">
        <div className="card proj-card w-75 shadow">
          <div className="card-body">
            <div className="proj-title">BAE</div>
            <div className="d-flex justify-content-center">
              <img src={Meeting} alt="Meeting" className="w-50"></img>
            </div>
            <div className="tech d-flex justify-content-around">
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
            <p className="proj-text">Description of project</p>
            <div className="proj-tech"></div>
          </div>
        </div>
        <div className="card proj-card w-75 shadow">
          <div className="card-body">
            <div className="proj-title">SoVest</div>
            <img src="https://via.placeholder.com/300"></img>

            <p className="proj-text">Description of project</p>
            <div className="proj-tech"></div>
          </div>
        </div>
        <div className="card proj-card w-75 shadow">
          <div className="card-body">
            <div className="proj-title">Cocktail Creator</div>
            <img src="https://via.placeholder.com/300"></img>

            <p className="proj-text">Description of project</p>
            <div className="proj-tech"></div>
          </div>
        </div>
      </div>
      <div className="row contact d-flex justify-content-center">
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
            <div className="p-2">
              {" "}
              <FontAwesomeIcon
                className="contact-item"
                icon={["fab", "github-square"]}
                size="4x"
              />
            </div>
            <div className="p-2">
              {" "}
              <FontAwesomeIcon
                className="contact-item"
                icon={["fab", "linkedin"]}
                size="4x"
              />
            </div>
            <div className="p-2">
              {" "}
              <FontAwesomeIcon
                className="contact-item"
                icon="envelope-square"
                size="4x"
              />
            </div>
          </div>
          <form className="contact-form"></form>
        </div>
      </div>
      <div className="row footer"></div>
    </div>
  );
}

export default App;
