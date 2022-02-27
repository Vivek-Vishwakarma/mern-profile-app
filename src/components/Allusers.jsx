import React from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
const Allusers = () => {
  return (
    <>
      <h1 className="text-center mt-4">All Users</h1>
      <div className="container">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="primary">View</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Allusers;
