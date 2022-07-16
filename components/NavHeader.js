import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";

function NavHeader(props) {
  console.log(props);
  return (
    <Navbar bg="primary" variant="light" expand="lg">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>Pokemon</Navbar.Brand>
        </Link>
        <Link to="/fav">
          <i className="bi bi-star-fill text-warning"></i>
          <span className="number text-warning">8</span>
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
