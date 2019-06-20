import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import SearchBox from "./SearchBox.jsx";

//        <Navbar.Toggle aria-controls="basic-navbar-nav" />
class BBGBar extends Component {
  render() {
    return (
      <Navbar bg="primary" expand="lg" variant="dark">
        <NavDropdown bg="primary" variant="dark" title="hamburger" id="nav-hamburger">
          <NavDropdown.Item href="#preferences">Preferences</NavDropdown.Item>
        </NavDropdown>
        <Navbar.Brand href="#home">BBG Quick Lookup</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Actions" id="nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <SearchBox className="game-search" />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default BBGBar;
