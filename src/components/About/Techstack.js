import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap"; // Added OverlayTrigger and Tooltip
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiMysql,
  SiFastapi,
  SiFlask,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAmazonaws,
  SiMicrosoftazure,
  SiApachekafka,
  SiWordpress,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-python">Python</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <DiPython />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-javascript">JavaScript</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <DiJavascript1 />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-mysql">MySQL</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiMysql />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-mongodb">MongoDB</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <DiMongodb />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-cplusplus">C++</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <CgCPlusPlus />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-java">Java</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <DiJava />
          </span>
        </OverlayTrigger>
      </Col>

      {/* Frameworks / Libraries */}
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-react">React</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <DiReact />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-nextjs">Next.js</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiNextdotjs />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-fastapi">FastAPI</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiFastapi />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-flask">Flask</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiFlask />
          </span>
        </OverlayTrigger>
      </Col>

      {/* Tools / Platforms */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-git">Git</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <DiGit />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-docker">Docker</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiDocker />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-kubernetes">Kubernetes</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiKubernetes />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-terraform">Terraform</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiTerraform />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-aws">Amazon AWS</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiAmazonaws />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-azure">Microsoft Azure</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiMicrosoftazure />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-kafka">Apache Kafka</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiApachekafka />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-wordpress">WordPress</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiWordpress />
          </span>
        </OverlayTrigger>
      </Col> */}
    </Row>
  );
}

export default Techstack;