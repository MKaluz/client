import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import "./App.css";
import DataList from "./Components/DataList";
import Register from "./Components/Register";
import axios from "axios";
import { Test } from "./Components/test";

// const App = () => {
//   const [token, setToken] = useState("Test");
//   const [data, setData] = useState(null);
//   const PAGES_URL = "https://localhost:44396";

// useEffect(() => {
//   axios
//     .get("https://localhost:44396/visit/available", {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })

//     .then(res => {
//       console.log(res.data);
//       setData([...data, res.data]);
//       console.log(data);
//     });
// }, []);

// useEffect(() => {
//   fetch("https://localhost:44396/visit/available", {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   })
//     .then(res => res.json())
//     .then(result => {
//       console.log(result);
//       setData(JSON.parse(result.));
//       console.log(data);
//     });
// }, []);

// const client = (token = null) => {
//   const defaultOptions = {
//     headers: {
//       Authorization: token ? `Bearer ${token}` : ""
//     }
//   };
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      token: "",
      data: []
    };
    this.setToken = this.setToken.bind(this);
  }
  setToken = _token => {
    this.setState({ token: _token });
  };

  componentDidMount() {
    axios
      .get("https://localhost:44396/visit/available", {
        headers: {
          Authorization: `Bearer ${this.state.token}`
        }
      })

      .then(res => {
        console.log("log" + res.data);
        this.setState({ data: res.data });
        console.log(this.state.data);
      });
  }
  render() {
    return (
      <div>
        Token: {this.state.token}
        Data: {this.state.data}
        <Router>
          <Switch>
            <Route exact path="/">
              <Login onTokenChange={this.setToken} token={this.state.token} />
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
  }
}
// return {
//   get: (url, options = {}) =>
//     axios.get(url, { ...defaultOptions, ...options }),
//   post: (url, data, options = {}) =>
//     axios.post(url, data, { ...defaultOptions, ...options }),
//   put: (url, data, options = {}) =>
//     axios.put(url, data, { ...defaultOptions, ...options }),
//   delete: (url, options = {}) =>
//     axios.delete(url, { ...defaultOptions, ...options })
// };

export default App;
