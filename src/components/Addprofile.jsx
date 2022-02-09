import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
const Addprofile = () => {
  const [profile, setProfile] = useState({
    education: "",
    dateOfBirth: "",
    age: "",
    image: "",
  });
  const handleFile = (e) => {
    setProfile({ ...profile, image: e.target.files[0]});
  };
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const postProfile = async (e) => {
    console.log(profile);
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
    console.log(formData)
    try {
      const response = await axios.post(
        "http://localhost:5000/api/profile/addprofile",
        formData,
        {
          headers: {
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmU4NGViYzcwODkxMWUwODdlMWI2NCIsImlhdCI6MTY0NDA3MDEzOH0.RQgHFyKAEbGxg8Mdmg3FohyTrxnGr5hGff0RPMspkFY",
          },
        }
      );
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form encType="multipart/form-data" id="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="dateOfBirth"
            type="date"
            placeholder="Enter DOB"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="image"
            type="file"
            onChange={handleFile}
            placeholder="image"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>age</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="age"
            type="number"
            placeholder="age"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>education</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="education"
            type="text"
            placeholder="edu"
          />
        </Form.Group>

        <Button onClick={postProfile} variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </>
  );
};

export default Addprofile;
