import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const MyNav = () => {
  const history = useNavigate()
  const logout = () =>{
    localStorage.removeItem("token");
    history("/login")
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="navlinks" to="/">
            React Profile App
          </Link>
        </Navbar.Brand>
        <Nav className="navlinks">
 
          <Nav.Link className="mx-3" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="mx-4" as={Link} to="/allusers">
            All Users
          </Nav.Link>
          <div className="buttons">
          {!localStorage.getItem("token") ? <Button variant="success" className="mx-2" as={Link} to="/login">
            Login
          </Button> : <Button variant="danger" className="mx-2" onClick={logout}>
            Logout
          </Button>}
          <Button variant="primary" className="mx-2" as={Link} to="/register">
            Sign Up
          </Button>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNav;
