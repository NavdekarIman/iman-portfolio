import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Med from "../../Assets/Projects/Med.png";
import Emp from "../../Assets/Projects/Emp.png";
import Resume from "../../Assets/Projects/Resume.png";
import Connect from "../../Assets/Projects/Connect.png";
import Algo from "../../Assets/Projects/Algo.png";

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
          {/* Project 1: Resume Builder */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resume}
              isBlog={false}
              title="Resume Builder"
              description="Developed a React-based frontend project for creating dynamic resumes, enhancing user customization and presentation. This was an in-house project for my college, integrated into our college's website."
              ghLink="https://github.com/NavdekarIman/ResumeBuilder-CollegeProject"
              // demoLink="" <--------Please include a demo link here if applicable
            />
          </Col>

          {/* Project 2: AOA Algorithms Visualization Tool */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Algo}
              isBlog={false}
              title="AOA Algorithms Visualization Tool"
              description="Created a web application using HTML, CSS, JavaScript, and Bootstrap to visualize algorithms such as Greedy, Dynamic Programming, Divide & Conquer, and Backtracking for educational purposes at AIKTC College."
              ghLink="https://github.com/NavdekarIman/AOA-Algorithms-Visualization"
              // demoLink="" <--------Please include a demo link here if applicable
            />
          </Col>

          {/* Project 3: TrackSoft - Employee Monitoring System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Emp}
              isBlog={false}
              title="TrackSoft - Employee Monitoring System"
              description="Developed a system using Python and Django to capture login screenshots and track in/out times, improving productivity and attendance management with real-time insights while prioritizing data security and privacy."
              ghLink=""
              // demoLink="" <--------Please include a demo link here if applicable
            />
          </Col>

          {/* Project 4: Med Care - Healthcare Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Med}
              isBlog={false}
              title="Med Care - Healthcare Website"
              description="Designed and developed a healthcare website focusing on [key features or goals], which is simple to use."
              ghLink="https://github.com/Iman_navdekar"
              // demoLink="" <--------Please include a demo link here if applicable
            />
          </Col>

          {/* Project 5: Connect-Four Game */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Connect}
              isBlog={false}
              title="Connect-Four Game"
              description="Implemented a Connect-Four game using Java, providing interactive gameplay and strategic challenges."
              ghLink="https://github.com/NavdekarIman/Connect-Four-game"
              // demoLink="" <--------Please include a demo link here if applicable
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
