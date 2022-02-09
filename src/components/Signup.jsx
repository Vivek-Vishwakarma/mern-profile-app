import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../App.css";
import Error from "./Error";
const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [errMessage, setErrMessage] = useState("");
  const [errors, setErrors] = useState(false);
  const postLogin = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:5000/api/auth/register", user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        setErrors(true);
        setErrMessage(error.response.data.message);
        console.log(error.response.data.message);
      });

  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      {errors && <Error message={errMessage} />}
      <Form onSubmit={postLogin} className="formDiv" autoComplete="off">
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Name :
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="name"
              minLength={3}
              required
              value={user.name}
              type="text"
              placeholder="Name ..."
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email :
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="email"
              required
              type="email"
              value={user.email}
              placeholder="Email ..."
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password :
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="password"
              required
              minLength={5}
              value={user.password}
              type="password"
              placeholder="Password ..."
            />
          </Col>
        </Form.Group>
        <Button
          disabled={!user.password}
          
          type="submit"
          variant="success"
        >
          Sign Up
        </Button>
      </Form>
    </>
  );
};

export default Signup;
