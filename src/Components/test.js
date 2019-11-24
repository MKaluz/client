import React from "react";

export class Test extends React.Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    fetch("https://localhost:44396/visit/available")
      .then(res => res.json())
      .then(json => this.setState({ contacts: json.results }));
  }

  render() {
    return <div>{this.state.contacts}</div>;
  }
}
