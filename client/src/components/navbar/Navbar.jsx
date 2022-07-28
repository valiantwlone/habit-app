import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default class NavbarC extends Component {

  render() {
    return (

      
      
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Habit-App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse  id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/main">Home</Nav.Link>
                <Nav.Link href="/main">Task</Nav.Link>
 
              </Nav>
              <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    );
  }
}