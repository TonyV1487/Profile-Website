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
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="3"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={Meeting} class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                  <img src={Agenda} class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                  <img src={Vote} class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                  <img src={User} class="d-block w-100" alt="..."></img>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
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
