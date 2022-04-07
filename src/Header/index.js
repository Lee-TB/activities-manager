import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm bg-body">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="btn btn-outline-dark">
                        Home
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/login" className="btn btn-outline-dark">
                                Login
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/signup" className="btn btn-outline-dark">
                                Sign Up
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
