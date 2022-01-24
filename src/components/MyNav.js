import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";

const MyNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="navlinks" to="/">
            Navbar
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Sign Up
          </Nav.Link>
          <Nav.Link as={Link} to="/allusers">
            All Users
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNav;
