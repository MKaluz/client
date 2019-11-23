import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { CardBody } from "react-bootstrap/Card";
import axios from "axios";

const AddVisit = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelClick = (_email, _pass) => {
    axios
      .post("https://localhost:44396/user/authenticate", {
        username: _email,
        password: _pass
      })
      .then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  };
  return (
    <div
      style={{
        position: "absolute",
        left: "20%",
        top: "30%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <b>Add Visit</b>
          </Card.Title>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={() => handelClick(email, password)}
            >
              Zaloguj
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddVisit;
