import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import Nav from "./components/Nav";
import Headshot from "./assets/headshot.JPEG";

library.add(fab, faEnvelopeSquare);

function App() {
  return (
    <div className="container-fluid">
      <Nav />
      <div className="row about align-items-center">
        <div className="col-5 headshot-background d-flex justify-content-center align-items-center">
          <div>
            <img
              className="align-middle"
              src={Headshot}
              alt="Headshot"
              height="450px"
              width="450px"
            ></img>
          </div>
        </div>
        <div className="col-7">
          <div class="card align-middle">
            <div class="card-body">
              <h2>Anthony Vester</h2>
              <h6>Full Stack Web Developer</h6>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row projects d-flex justify-content-center">
        <div className="card proj-card w-75">
          <div className="card-body">
            <div className="proj-title">Project 1</div>
            <img src="https://via.placeholder.com/300"></img>

            <p className="proj-text">Description of project</p>
            <div className="proj-tech"></div>
          </div>
        </div>
        <div className="card proj-card w-75">
          <div className="card-body">
            <div className="proj-title">Project 2</div>
            <img src="https://via.placeholder.com/300"></img>

            <p className="proj-text">Description of project</p>
            <div className="proj-tech"></div>
          </div>
        </div>
        <div className="card proj-card w-75">
          <div className="card-body">
            <div className="proj-title">Project 3</div>
            <img src="https://via.placeholder.com/300"></img>

            <p className="proj-text">Description of project</p>
            <div className="proj-tech"></div>
          </div>
        </div>
      </div>
      <div className="row contact d-flex justify-content-center">
        <div className="contact-body d-flex justify-content-center">
          <h5>Contact Me</h5>
          <p>
            Feel free to use the form below, or email me directly. I look
            forward to speaking with you!
          </p>
          <form className="contact-form"></form>
        </div>
      </div>
    </div>
  );
}

export default App;
