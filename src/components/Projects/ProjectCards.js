import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import styles from "./ProjectCards.module.css"; // Import CSS module

function ProjectCards(props) {
  return (
    <Card className={styles["project-card-view"]}>
      <div className={styles["image-container"]}>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <div className={styles.overlay}>
          <Card.Title className={styles["project-title"]}>
            {props.title}
          </Card.Title>
        </div>
      </div>
      <Card.Body>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
