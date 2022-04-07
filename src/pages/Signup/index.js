import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    return (
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign up</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
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

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            ref={passwordRef}
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="formBasicPasswordConfirm"
                    >
                        <Form.Label>Password confirm</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password Confirm"
                            ref={passwordConfirmRef}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign up
                    </Button>
                </Form>

                <Card.Text>
                    <Link to="/login">Already have a account</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
