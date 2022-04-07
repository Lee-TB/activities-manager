import React, { useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    return (
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formLoginEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            ref={emailRef}
                            required
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLoginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            ref={passwordRef}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>

                <Card.Text>
                    <Link to="/signup">Create a new account</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
