import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccessLogin, setIsSuccessLogin] = useState(false);
  let history = useHistory();

  const handleLogin = () => {
    let statusCode = "";
    axios
      .post("https://localhost:44396/user/authenticate", {
        username: username,
        password: password
      })
      .then(response => {
        props.onTokenChange(response.data.token);
        if (response.data.token != "") {
          setIsSuccessLogin(true);
        }
      })
      .catch(error => {
        setPassword("");
        setUsername("");
        setIsSuccessLogin(false);
        console.log("login error", error);
      });
    if (isSuccessLogin) {
      history.push("/visits");
    } else {
      history.push("/");
    }
  };
  const test = () => {
    axios
      .get("https://localhost:44396/visit", {
        headers: {
          Authorization: `Bearer ${props.token}`
        }
      })
      .then(res => console.log(res));
  };

  // const alertPop = () => {
  //   if (isSuccessAlert) {
  //     return <Alert variant="success">Zalogowano pomyślnie!</Alert>;
  //   } else {
  //     return <Alert variant="danger">Logowanie nie udane</Alert>;
  //   }
  // };

  const handleRedirect = () => {
    history.push("/register");
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={e => setUsername(e.target.value)}
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
        <Form.Text className="text-muted" onClick={handleRedirect}>
          Nie masz konta? Zarejestruj się <b>tutaj</b>!
        </Form.Text>
      </Form>
      <Button variant="primary" type="submit" onClick={handleLogin}>
        Zaloguj
      </Button>
      <Button onClick={test}>Test</Button>
    </div>
  );
};

export default Login;
