import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Addprofile = () => {
  const history = useNavigate()
  const [profile, setProfile] = useState({
    education: "",
    dateOfBirth: "",
    age: "",
    name: "",
    image: "",
  });
  const handleFile = (e) => {
    setProfile({ ...profile, image: e.target.files[0]});
  };
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const postProfile = async (e) => {
    e.preventDefault();
    // fetch("http://localhost:5000/api/profile/addprofile", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //     "x-auth-token":
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWQxZmY2MGZmMzdiMWM4ZmE1YWIxZSIsImlhdCI6MTY0MzgxMDU5M30.hFcdqTXjmdUw12d_3UVGERDg-jJHWGoyy695yafowhw",
    //   },
    //   body: JSON.stringify(profile),
    // })
    //   .then(  (response) =>  response.json())
    //   .then((json) => console.log(json))
    //   .catch((err) => console.log(err));
    let formData = new FormData()
    formData.append("image", profile.image)
    formData.append("education", profile.education)
    formData.append("dateOfBirth", profile.dateOfBirth)
    formData.append("age", profile.age)
    formData.append("name", profile.name)
    try {
      const response = await axios.post(
        "/api/profile/addprofile",
        formData,
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
    
      alert("Profile Added Sucessfully !!")
      history("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container my-4">
    <h1 className="text-center  my-4">Add Profile</h1>
    <Form encType="multipart/form-data" id="form">
    <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name : </Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter name ..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date Of Birth : </Form.Label>
          <Form.Control
            onChange={handleChange}
            name="dateOfBirth"
            type="date"
            placeholder="Enter DOB ..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image : </Form.Label>
          <Form.Control
            name="image"
            type="file"
            onChange={handleFile}
            placeholder="Image ..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Age : </Form.Label>
          <Form.Control
            onChange={handleChange}
            name="age"
            type="number"
            placeholder="Age ..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Education : </Form.Label>
          <Form.Control
            onChange={handleChange}
            name="education"
            type="text"
            placeholder="Education ..."
          />
        </Form.Group>

        <Button onClick={postProfile} variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default Addprofile;



