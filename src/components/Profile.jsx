import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"
const Profile = () => {
  const [user, setUser] = useState()
  const getProfile = async (e) => {
    await axios.get("http://localhost:5000/api/profile/allprofile", {
      header : {
          "x-auth-token" : localStorage.getItem("token")
      }
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });

  };
  useEffect(() => {
    getProfile()
  }, [])
  
  return (
      <div className="container profileDiv">
          <h1 className="text-center mt-4">This is Profile Page</h1>
          <Button as={Link} to="/addprofile" variant="success">
          Add Profile
        </Button>
      </div>
  );
};

export default Profile;
