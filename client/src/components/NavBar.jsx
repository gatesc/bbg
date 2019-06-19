import React, { Component } from "react";
import NavBar from "react-bootstrap/NavBar";

class BBGBar extends Component {
  render() {
    return (
      <Navbar bg="primary" expand="bg">
        <Navbar.Brand href="#home">BBG Client Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#preferences">Preferences</Nav.Link>
            // <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Actions" id="navbar-actions">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              //{" "}
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              //{" "}
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              // <NavDropdown.Divider />
              //{" "}
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default BBGBar;
