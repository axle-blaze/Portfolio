import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi everyone! I'm <span className="purple">Gaurav Singh</span> from <span className="purple">Varanasi, India</span>.
    <br />
    <br />
    I'm currently working as a Software Developer at <strong>Cognitive View</strong>.
    I hold an Integrated B.Tech and M.Tech degree from <strong>IIT Bhubaneswar</strong>, where I specialized in full-stack development and distributed systems.
    <br />
    <br />
    When I'm not immersed in code, I enjoy indulging in a few of my favorite pastimes:
  </p>
  <ul>
    <li className="about-activity">
      <ImPointRight /> Gaming
    </li>
    <li className="about-activity">
      <ImPointRight /> Competitive Programming
    </li>
    <li className="about-activity">
      <ImPointRight /> Watching Anime
    </li>
  </ul>

  <p style={{ color: "rgb(155 126 172)" }}>
    "Strive to build things that make a difference!"
  </p>
  <footer className="blockquote-footer">Gaurav</footer>
</blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
