import Card from "react-bootstrap/Card";
import axios from "axios";
import React, { useEffect, useState } from "react";
const Allusers = () => {
  const [user, setUser] = useState();
  const getUsers = async (e) => {
    await axios
      .get("/api/auth/allusers")
      .then((response) => {
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
      <h1 className="text-center my-4">All Users</h1>
      <div className="container d-flex flex-wrap my-4">
        {user &&
          user.map((element) => {
            return (
              <Card className="mx-4" key={element._id} style={{ width: "16rem" }}>
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                  <Card.Text>
                    Email : {element.email}
                  </Card.Text>
                  <Card.Text>
                    Joined on : {element.createdAt.split('T')[0]}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </>
  );
};
export default Allusers;
