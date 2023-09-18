import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import { Message } from "../components/Message";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";

const RegisterScreen = () => {
  const { search } = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  const userRegister = useSelector((state: any) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (password === password2) {
      dispatch(register(name, email, password));
    } else {
      setMessage("Passwords do not match");
    }
  };

  return (
    <FormContainer>
      <h1>Register</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label> Name</Form.Label>
          <Form.Control
            required
            type="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            required
            placeholder="Confirm password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        Already have an account ?
        <Link to={redirect ? `/login/?redirect=${redirect}` : "login"}>
          Sign in{" "}
        </Link>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
