import React, { Component , useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLogin } from '../../hooks/useLogin';
import { useSignup } from '../../hooks/useSignup';
import { useState } from 'react';
import { useLogout} from "../../hooks/useLogout"
import { useAuthContext } from '../../hooks/useAuthContext';
import '../navbar/navbar.css'
import Button from 'react-bootstrap/Button';
import logo from '../../images/Habit-logo.png'
import { ThemeContext } from '../../context/ThemeContext';



export default function NavbarC () {


    const { logout, Logged } = useLogout()
    const [isLogged, setIsLogged] = useState(useLogin.isLogged || useSignup.isLogged)
    const {user} = useAuthContext();
    const {isLightTheme, light, dark, changeTheme}=useContext(ThemeContext);
    const theme = isLightTheme ? light : dark ;
    const navigate= useNavigate();

    const handleClick =() =>{
      logout()
      setIsLogged(false)
      navigate("/login")
    }

    

    return (

          <nav 
          className="navbar navbar-dark bg-dark navbar-expand-lg "
          style ={{background : theme.ui, color: theme.syntax}}>
           
          
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
              
                <Navbar.Brand href="#home">Habit-App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/main">Task</Nav.Link>
     
                  </Nav>
                  <Nav>
                    {!user && <Nav.Link href="/login">Login</Nav.Link>}
                    {!user && <Nav.Link href="/signup">Signup</Nav.Link>}
                    { user &&
                    <Nav.Link onClick={handleClick} >
                      Logout ( <span>{user.username}</span> )
                    </Nav.Link>
                    }
                  </Nav>
    
    
                </Navbar.Collapse>
    
    
              </Container>
    
    
            </Navbar>
            
              <div className='theme-button'>
                <div  className={isLightTheme ? 'theme-switch-light': 'theme-switch-dark' } ></div>
              </div>
            
    
          </nav>

 

    );
  
}