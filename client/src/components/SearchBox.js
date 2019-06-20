import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';


class SearchBox extends Component {
  state = {
    searchStr: ""
  }

  render () {
  <Form>
    <Form.Group controlId="formSearchBox">
      <Form.Label>Search</Form.Label>
      <Form.Control type="email" placeholder="Enter Game Title" />
      <Form.Text className="text-muted">
        This will query BoardGameGeek for that title
      </Form.Text>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  }
}
