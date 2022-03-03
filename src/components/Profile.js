import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const history = useNavigate();
  const [user, setUser] = useState();
  const getProfile = async (e) => {
    await axios
      .get("http://localhost:5000/api/profile/allprofile", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history("/login");
      alert("Please login to view your profile !!");
    }
    getProfile();
  }, []);

  return (
    <div className="container profileDiv">
      <h1 className="text-center mt-4">This is Profile Page</h1>
      <div className="container d-flex">
        {user &&
          user.map((element) => {
            return (
              <Card key={element._id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={`http://localhost:5000/uploads/${element.image}`}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Age : {element.age}
                  </Card.Text>
                  <Card.Text>
                    Date of Birth : {element.dateOfBirth.split('T')[0]}
                  </Card.Text>
                  <Card.Text>
                    Education : {element.education}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
      <Button as={Link} to="/addprofile" variant="success">
        Add Profile
      </Button>
    </div>
  );
};

export default Profile;
