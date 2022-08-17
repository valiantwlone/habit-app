import {BrowserRouter as Router , Routes ,   Route} from "react-router-dom";
// import Main from './components/main/Main';
import Mainv2 from "./components/mainv2/Mainv2.jsx"
import Login from "./components/login/Login"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar/Navbar';
import React from 'react'
import Home from "./components/home/Home"
import Signup from "./components/signup/Signup"
import { Navigate } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext.js";



function App() {
  return (
   
      <ThemeContextProvider>
        <Router>
          <Navbar />
            <Routes>
            <Route 
                path="/Home"
                exact element={ <Home /> } />
              <Route 
                path="/Mainv2"
                element={ <Mainv2/> } />
              <Route 
                path="/main"
                element={<Mainv2/>} />
              <Route 
                path="/login"
                element={<Login /> } />
              <Route 
              path='/signup' 
              element={<Signup />} />
            </Routes>
          
        </Router>
      </ThemeContextProvider>

  
    

  );
}

export default App;
