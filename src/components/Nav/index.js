import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <div
      className="row nav d-flex flex-row justify-content-between navstyle"
      id="nav"
    >
      <div>
        <a className="nav-item navbar-brand pl-3" href="#nav">
          AV
        </a>
      </div>
      <div className="d-flex flex-row">
        <a className="nav-item nav-link active" href="#about">
          About <span className="sr-only">(current)</span>
        </a>
        <a className="nav-item nav-link" href="#projects">
          Projects
        </a>
        <a className="nav-item nav-link" href="#contact">
          Contact
        </a>
      </div>
      <div className="d-flex flex-row">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/TonyV1487"
        >
          <div className="p-2">
            {" "}
            <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" />
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/anthonyvester/"
        >
          <div className="p-2">
            {" "}
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:tvester1487@gmail.com"
        >
          <div className="p-2">
            {" "}
            <FontAwesomeIcon icon="envelope-square" size="2x" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Nav;
