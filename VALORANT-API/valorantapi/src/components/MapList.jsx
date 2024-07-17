import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
export default function MapList({ map }) {
  const { listViewIcon, coordinates, displayName } = map;
  return (
    <div>
      {
        <Card
          className="card"
          style={{
            width: "18rem",
          }}
        >
          <img style={{ height: "120px" }} alt="Sample" src={listViewIcon} />
          <CardBody>
            <CardTitle className="card-title" tag="h5">
              {displayName}
            </CardTitle>

            <CardText>{coordinates}</CardText>
            <Button className="button">Detail</Button>
          </CardBody>
        </Card>
      }
    </div>
  );
}
