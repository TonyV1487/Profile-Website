import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Headshot from "../../assets/Headshot2.jpg";

function About() {
  return (
    <div
      className="row d-flex flex-wrap about align-items-center justify-content-between"
      id="about"
    >
      <div className="headshot-background d-flex justify-content-center align-items-center">
        <div>
          <img
            className="align-middle rounded img-fluid about-img"
            src={Headshot}
            alt="Headshot"
          ></img>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="card about-card shadow">
          <div className="card-body">
            <h2>Anthony Vester</h2>

            <div className="pl-4">
              <a className="font-bold about-text">Full Stack Web Developer</a>{" "}
              with a background in marketing and eCommerce sales. Recently
              earned a certificate in Full Stack Web Development from
              Northwestern University with a focus on developing skills in
              JavaScript, CSS, React.js, Node.js, MongDB, and responsive web
              design. I strive to maintain a high work ethic, positive attitude,
              and provide the most value in any relationship. With each new
              opportunity, my willingness to evolve and grow has allowed me to
              advance in my career. With these principles and my love for
              problem solving, I hope to work with talented individuals who are
              hungry to develop technologies that better the lives of our
              customers and peers. I’m also lucky to have had fantastic mentors
              along the way and I look forward to being a resource to others in
              my field as I progress through my career.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
