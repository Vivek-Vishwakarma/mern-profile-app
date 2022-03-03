import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
const Allusers = () => {
  const [user, setUser] = useState();
  const getUsers = async (e) => {
    await axios
      .get("http://localhost:5000/api/auth/allusers")
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h1 className="text-center mt-4">All Users</h1>
      <div className="container d-flex">
        {user &&
          user.map((element) => {
            return (
              <Card key={element._id} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                  <Card.Text>
                    {element.email}
                  </Card.Text>
                  <Card.Text>
                    {element.createdAt.split('T')[0]}
                  </Card.Text>
                  <Button variant="primary">View</Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </>
  );
};
export default Allusers;
