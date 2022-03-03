import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate  } from "react-router-dom";
import "../App.css";
import Error from "./Error";
const Login = () => {
  const history = useNavigate ()
  const [user, setUser] = useState({ email: "", password: "" });
  const [errMessage, setErrMessage] = useState("");
  const [errors, setErrors] = useState(false);
  const postLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/auth/login", user)
      .then((response) => {
        console.log(response);
        if (response.data.sucess) {
          localStorage.setItem("token" , response.data.token)
          history("/profile")
        }
      })
      .catch((error) => {
        setErrors(true);
        setErrMessage(error.response.data.message);
        console.log(error.response.data);
      });

  };
  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      history("/profile")
    }
  }, [])
  
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      {errors && <Error message={errMessage} />}
      <Form onSubmit={postLogin} className="formDiv" autoComplete="off">
        <Form.Group
          required
          as={Row}
          className="mb-3"
          controlId="formPlaintextEmail"
        >
          <Form.Label column sm="2">
            Email :
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="email"
              type="email"
              value={user.name}
              required
              placeholder="Email ..."
            />
          </Col>
        </Form.Group>

        <Form.Group
          required
          as={Row}
          className="mb-3"
          controlId="formPlaintextPassword"
        >
          <Form.Label column sm="2">
            Password :
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChange}
              name="password"
              required
              value={user.password}
              type="password"
              placeholder="Password ..."
            />
          </Col>
        </Form.Group>
        <Button disabled={!user.password} type="submit" variant="success">
          Log in
        </Button>
      </Form>
    </>
  );
};

export default Login;
