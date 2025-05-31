import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
  <ProjectCard
    imgPath={leaf}
    isBlog={false}
    title="Real-Time Collaborative Design Tool"
    description="A Figma-style design tool enabling multiple users to edit a shared canvas in real-time using WebSockets. Built with Next.js, FastAPI, and Fabric.js for rich UI and state sync across clients."
    ghLink="https://github.com/axel-blaze/realtime-design-tool"
    demoLink="https://realtime-design-tool.vercel.app/"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={leaf}
    isBlog={false}
    title="Agentic AI Workflow Orchestrator"
    description="LLM-powered GitHub bot built with LangChain and Kafka to monitor CI/CD pipelines, analyze logs, and auto-suggest fixes. Integrated with GitHub API and AWS Secrets Manager to trigger intelligent PRs."
    ghLink="https://github.com/axel-blaze/ai-ci-orchestrator"
    demoLink="https://ci-bot.vercel.app/"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={leaf}
    isBlog={false}
    title="Semantic Search with LLMs"
    description="Built microservices with FastAPI and MongoDB using vector embeddings and LangChain to enable contextual search across unstructured data. Deployed on AWS EKS with scalable architecture."
    ghLink="https://github.com/axel-blaze/llm-semantic-search"
    demoLink="https://semantic-search-ai.vercel.app/"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={leaf}
    isBlog={false}
    title="Image Analysis for Aggregates"
    description="Developed a computer vision model to analyze fine and coarse aggregates in concrete mixes. Used OpenCV and Python for feature extraction and classification based on grain shape, size, and texture."
    ghLink="https://github.com/axel-blaze/aggregate-image-analysis"
    demoLink="https://aggregate-inspector.vercel.app/"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={leaf}
    isBlog={false}
    title="MERN Stack Campground App"
    description="A full-stack campground review app built with MongoDB, Express.js, React.js, and Node.js. Includes user auth, CRUD operations, image uploads, and responsive UI. Deployed with cloudinary and Mapbox integration."
    ghLink="https://github.com/axel-blaze/mern-campground"
    demoLink="https://campground-app.vercel.app/"
  />
</Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
