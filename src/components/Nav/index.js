import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <div className="row nav d-flex flex-row justify-content-between navstyle">
      <div>
        <a className="nav-item navbar-brand pl-3" href="#">
          AV
        </a>
      </div>
      <div className="d-flex flex-row">
        <a className="nav-item nav-link active" href="#">
          About <span className="sr-only">(current)</span>
        </a>
        <a className="nav-item nav-link" href="#">
          Projects
        </a>
        <a className="nav-item nav-link" href="#">
          Contact
        </a>
      </div>
      <div className="d-flex flex-row">
        <div className="p-2">
          {" "}
          <FontAwesomeIcon
            className="nav-item"
            icon={["fab", "github-square"]}
            size="2x"
          />
        </div>
        <div className="p-2">
          {" "}
          <FontAwesomeIcon
            className="nav-item"
            icon={["fab", "linkedin"]}
            size="2x"
          />
        </div>
        <div className="p-2">
          {" "}
          <FontAwesomeIcon
            className="nav-item"
            icon="envelope-square"
            size="2x"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
