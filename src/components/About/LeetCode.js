import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Card } from "react-bootstrap";

function LeetCode() {
  const [leetcodeData, setLeetcodeData] = useState(null);

  useEffect(() => {
    axios
      .get("https://leetcode-stats-api.herokuapp.com/Iman_Navdekar")
      .then((response) => {
        setLeetcodeData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching LeetCode data:", error);
      });
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Problems I <strong className="purple">Solved</strong> 
      </h1>
      {leetcodeData ? (
        <Card className="quote-card-view">
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
                <strong>Total Problems Solved: </strong> {leetcodeData.totalSolved}
                <br />
                <strong>Easy: </strong> {leetcodeData.easySolved}
                <br />
                <strong>Medium: </strong> {leetcodeData.mediumSolved}
                <br />
                <strong>Hard: </strong> {leetcodeData.hardSolved}
              </p>
            </blockquote>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading LeetCode data...</p>
      )}
    </Row>
  );
}

export default LeetCode;
