import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Iman Navdekar </span>
            from <span className="purple"> Anjuman-I-Islam's Kalsekar Technical Campus.</span>
            <br />
            I am a Computer Science student with expertise in JavaScript and the MERN Stack (MongoDB, Express.js, React, Node.js).
            <br />
            I serve as the Marketing and Social Media Lead at the Programmers Club, where I enhance community engagement through strategic communication.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Organizing Events
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching investigations 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Iman Navdekar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
