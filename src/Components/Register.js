import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Register = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  let history = useHistory();

  const handleRegister = () => {
    axios
      .post("https://localhost:44396/user/register", {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email
      })
      .then(response => {
        console.log(response);
      });
    history.push("/");
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Imię</Form.Label>
          <Form.Control
            type="text"
            placeholder="Imię"
            onChange={e => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nazwisko</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nazwisko"
            onChange={e => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            placeholder="Login"
            onChange={e => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="Email"
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit" onClick={handleRegister}>
        Zarejestruj
      </Button>
    </div>
  );
};

export default Register;
