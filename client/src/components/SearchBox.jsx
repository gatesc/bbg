import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class SearchBox extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    searchStr: ""
  }

  handleSubmit() {
  }

  render() {
    return (
      <Form inline>
      <Form.Group controlId="formSearchBox">
        <Form.Label>Search</Form.Label>
        <Form.Control type="as" placeholder='Enter Game Title'/>
      </Form.Group>
      <Button variant="outline-dark" type="submit" onClick="this.handleSubmit">
        Submit
      </Button>
    </Form>

  )
  }
}

export default SearchBox;
