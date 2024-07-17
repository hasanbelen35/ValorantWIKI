import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGuns } from "../redux/gunSlice"; // Eğer aksiyonu doğru şekilde import etmediyseniz, düzeltin.
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { Container } from "reactstrap";

export default function GunPage() {
  const dispatch = useDispatch();
  const { guns } = useSelector((state) => state.guns);
  console.log(guns);
  useEffect(() => {
    dispatch(getAllGuns());
  }, [dispatch]);

  return (
    <div>
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <h4 style={{ width: "100%", textAlign: "center", color: "red" }}>
          Guns Names
        </h4>
        {guns &&
          guns.map((gun) => (
            <Card
              style={{ backgroundColor: "red" }}
              className="card"
              style={{
                width: "18rem",
              }}
            >
              <img alt="Sample" src={gun.displayIcon} />
              <CardBody>
                <CardTitle className="card-title" tag="h5">
                  {gun.displayName}
                </CardTitle>

                <CardText>{gun.category}</CardText>
                <Button className="button">Detail</Button>
              </CardBody>
            </Card>
          ))}
      </Container>
    </div>
  );
}
