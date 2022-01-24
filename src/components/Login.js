import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../App.css";
const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setUser({...user,[e.target.name]: e.target.value,});
  };
  
  return (
    <Form className="formDiv">
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email :
        </Form.Label>
        <Col sm="10">
          <Form.Control
            onChange={handleChange}
            name="email"
            required
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
            type="password"
            placeholder="Password ..."
          />
        </Col>
      </Form.Group>
      <Button type="submit" variant="success">
        Log in
      </Button>
    </Form>
  );
};

export default Login;
