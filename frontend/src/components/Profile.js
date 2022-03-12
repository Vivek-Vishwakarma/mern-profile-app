import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const history = useNavigate();
  const [rerender, setRerender] = useState(false);
  const [user, setUser] = useState([]);
  const deleteProfile = async (e) => {
    await axios
      .delete(`/api/profile/delete/${e.target.value}`, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setRerender(!rerender);
        alert("Profile deleted sucessfully");
        history("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getProfile = async (e) => {
    await axios
      .get("/api/profile/allprofile", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history("/register");
      alert("Please login or register to view your profile !!");
    }
    getProfile();
  }, [history,rerender]);

  return (
    <div className="container profileDiv">
      <h1 className="text-center my-4">This is Profile Page</h1>
      <Button as={Link} className="my-4" to="/addprofile" variant="success">
        Add Profile
      </Button>
      <div className="container d-flex flex-wrap">
        {user && user.length === 0 ? (
          <p>No Profile to View</p>
        ) : (
          user &&
          user.map((element) => {
            return (
              <Card key={element._id} style={{ width: "14rem", margin : "5px 20px" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "150px", height: "150px" }}
                  src={`/uploads/${element.image}`}
                />
                <Card.Body>
                  <Card.Title>{element.name ? element.name : "Not Available"}</Card.Title>
                  <Card.Text>Age : {element.age}</Card.Text>
                  <Card.Text>
                    Date of Birth : {element.dateOfBirth.split("T")[0]}
                  </Card.Text>
                  <Card.Text>Education : {element.education}</Card.Text>
                  <Button
                    variant="danger"
                    value={element._id}
                    onClick={deleteProfile}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            );
          })
        )}
      </div>
      
    </div>
  );
};

export default Profile;
