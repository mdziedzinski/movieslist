import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <Link className="text-decoration-none text-white" to="/">
            WatchList App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end "
        >
          <Nav className="align-items-center ">
            <Button variant="dark" className="me-3 my-1">
              <Link className="text-decoration-none text-white" to="/">
                Watch List
              </Link>
            </Button>
            <Button variant="dark" className="me-3 my-1">
              <Link className="text-decoration-none text-white" to="/watched">
                Watched
              </Link>
            </Button>

            <Button variant="success" className="me-3 my-1">
              <Link className="text-decoration-none text-white" to="/add">
                Add new movie{" "}
              </Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
