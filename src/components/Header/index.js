import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Logout from "../Logout";
import CreateActivites from "../CreateActivities";

export default function Header() {
    const { user } = useContext(AuthContext);

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
                    <Nav className="ms-auto">
                        {user ? (
                            <>
                                <Nav.Link>
                                    <CreateActivites className="btn btn-outline-dark d-grid">
                                        Create Activities Group
                                    </CreateActivites>
                                </Nav.Link>
                                <Nav.Link>
                                    <Logout className="btn btn-outline-dark d-grid">
                                        Logout
                                    </Logout>
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link>
                                    <Link
                                        to="/login"
                                        className="btn btn-outline-dark d-grid"
                                    >
                                        Login
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link
                                        to="/signup"
                                        className="btn btn-outline-dark d-grid"
                                    >
                                        Sign Up
                                    </Link>
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
