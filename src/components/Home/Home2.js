import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      LET ME <span className="purple"> INTRODUCE </span> MYSELF
    </h1>
    <p className="home-about-body">
      I’m <b className="purple">Gaurav Singh</b>, a results-driven Software Engineer with a dual degree (B.Tech + M.Tech) from <b className="purple">IIT Bhubaneswar</b>. I specialize in full-stack development, distributed systems, and cloud-native architecture.
      <br />
      <br />
      Over the past 2+ years, I’ve architected and deployed scalable microservices using technologies like <b className="purple">Python, FastAPI, Kafka</b>, and <b className="purple">MongoDB</b>, capable of handling 50,000+ concurrent requests monthly. My experience includes building event-driven systems, LLM-integrated applications, and automation-first DevOps pipelines.
      <br />
      <br />
      I am proficient in languages such as <b className="purple">Python, JavaScript, TypeScript, and SQL</b>, and have hands-on experience with tools and platforms like <b className="purple">AWS, Azure, Kubernetes, Docker, and Terraform</b>. On the frontend, I enjoy working with <b className="purple">React.js</b> and <b className="purple">Next.js</b> to build intuitive user experiences.
      <br />
      <br />
      My professional journey includes roles at <b className="purple">Cognitive View</b> and <b className="purple">Boossti S.A.</b>, where I’ve contributed to secure backend infrastructures, real-time processing systems, and production-grade user interfaces.
      <br />
      <br />
      Outside of work, I’m passionate about <b className="purple">competitive programming</b>, with 1350+ problems solved on LeetCode (Knight; max rating: 2008), and I’m also an ICPC regionalist.
    </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
</Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/axle-blaze"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/gauravsingh3122"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gauravsingh3122/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/axelblaze3122"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
