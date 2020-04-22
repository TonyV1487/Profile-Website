import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import Nav from "./components/Nav";

library.add(fab, faEnvelopeSquare);

function App() {
  return (
    <div className="container-fluid">
      <Nav />
      <div className="row about align-items-center">
        <div className="col-5">
          <div className="d-flex justify-content-center align-middle">
            <img src="https://via.placeholder.com/300"></img>
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
      <div className="row about align-items-center">Test</div>
    </div>
  );
}

export default App;
