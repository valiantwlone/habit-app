import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLogin } from '../../hooks/useLogin';
import { useSignup } from '../../hooks/useSignup';
import { useState } from 'react';
import { useLogout} from "../../hooks/useLogout"


export default function NavbarC () {
    const { logout, Logged } = useLogout()
    const [isLogged, setIsLogged] = useState(useLogin.isLogged || useSignup.isLogged)


    const handleClick =() =>{
      logout()
      setIsLogged(false)
    }

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
                <Nav.Link href="/signup">Signup</Nav.Link>
                { isLogged &&
                <Nav.Link onClick={handleClick} >
                  Logout
                </Nav.Link>
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    );
  
}