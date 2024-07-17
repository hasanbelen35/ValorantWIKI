import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import "../componentCSS/AgentsPage.css";
export default function AgenstPage({ agent }) {
  const { fullPortrait, displayName, description, uuid } = agent;
  return (
    <div style={{ marginTop: "90px" }}>
      <Card
        className="card"
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={fullPortrait} />
        <CardBody>
          <CardTitle className="card-title" tag="h5">
            {displayName}
          </CardTitle>

          <CardText>{description}</CardText>
          <Button className="button">Detail</Button>
        </CardBody>
      </Card>
    </div>
  );
}
