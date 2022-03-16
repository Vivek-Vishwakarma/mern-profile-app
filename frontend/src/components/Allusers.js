import Card from "react-bootstrap/Card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
const Allusers = () => {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();
  const [show, setShow] = useState(false);

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getProfile = async (e) => {
    console.log(e.target.value)
    await axios
      .get(`/api/profile/profile/${e.target.value}`)
      .then((response) => {
        setProfile(response.data);
        console.log(response)
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Body style={{display : "flex", flexWrap : "wrap"}}>
          {profile && profile.map((item)=> {
            return(
            <Card key={item._id} style={{ width: "14rem", margin : "5px 20px" }}>
            <Card.Img
              variant="top"
              style={{ width: "150px", height: "150px" }}
              src={`/uploads/${item.image}`}
            />
            <Card.Body>
              <Card.Title>{item.name ? item.name : "Not Available"}</Card.Title>
              <Card.Text>Age : {item.age}</Card.Text>
              <Card.Text>
                Date of Birth : {item.dateOfBirth.split("T")[0]}
              </Card.Text>
              <Card.Text>Education : {item.education}</Card.Text>
            </Card.Body>
          </Card>
          )})}
        </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
                  <Button onClick={(e)=>{handleShow(); getProfile(e)}} value={element._id} variant="primary">
                    View
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </>
  );
};
export default Allusers;
