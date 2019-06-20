import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class DebugLog extends Component {
  render() {
    return (
    <Card style={{ width: '50rem', height: '20rem'}}>
      <Card.Body>
        <Card.Title>Debug Stuff</Card.Title>
        <Card.Text>Important Debug Text Here</Card.Text>
      </Card.Body>
    </Card>
  );
  }
}

export default DebugLog;
