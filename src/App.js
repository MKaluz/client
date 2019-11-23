import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import "./App.css";
import DataList from "./Components/DataList";
import Register from "./Components/Register";
import axios from "axios";

const App = () => {
  const [token, setToken] = useState("Test");
  const PAGES_URL = "https://localhost:44396";

  const client = (token = null) => {
    const defaultOptions = {
      headers: {
        Authorization: token ? `Bearer ${token}` : ""
      }
    };

    return {
      get: (url, options = {}) =>
        axios.get(url, { ...defaultOptions, ...options }),
      post: (url, data, options = {}) =>
        axios.post(url, data, { ...defaultOptions, ...options }),
      put: (url, data, options = {}) =>
        axios.put(url, data, { ...defaultOptions, ...options }),
      delete: (url, options = {}) =>
        axios.delete(url, { ...defaultOptions, ...options })
    };
  };

  return (
    <div>
      Token: {token}
      <Router>
        <Switch>
          <Route exact path="/">
            <Login onTokenChange={setToken} token={token} />
          </Route>
          <Route path="/visits">
            <DataList />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
