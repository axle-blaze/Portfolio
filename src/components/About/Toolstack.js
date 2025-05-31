import React from "react";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap"; // Added OverlayTrigger and Tooltip
import {
  SiVisualstudiocode,
  SiPostman,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiSentry,
  SiDatadog,
  SiSlack,
  SiWordpress,
  SiLinux,
  SiWindows11,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Platforms */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-windows">Windows</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiWindows11 />
          </span>
        </OverlayTrigger>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-linux">Linux</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiLinux />
          </span>
        </OverlayTrigger>
      </Col>

      {/* IDEs and Utilities */}
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-vscode">Visual Studio Code</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiVisualstudiocode />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-postman">Postman</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiPostman />
          </span>
        </OverlayTrigger>
      </Col>

      {/* DevOps & CI/CD Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-github">GitHub</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiGithub />
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

      {/* Cloud Providers */}
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

      {/* Monitoring & Observability */}
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-prometheus">Prometheus</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiPrometheus />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-grafana">Grafana</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiGrafana />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-sentry">Sentry</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiSentry />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-datadog">Datadog</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiDatadog />
          </span>
        </OverlayTrigger>
      </Col>

      {/* Communication & CMS */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-slack">Slack</Tooltip>}
        >
          <span style={{ display: "inline-block", cursor: "pointer" }}>
            <SiSlack />
          </span>
        </OverlayTrigger>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
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

export default Toolstack;