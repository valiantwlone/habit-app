import {BrowserRouter as Router , Routes ,   Route} from "react-router-dom";
// import Main from './components/main/Main';
import Mainv2 from "./components/mainv2/Mainv2.jsx"
import Login from "./components/login/Login"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar/Navbar';
import React from 'react'
import Home from "./components/home/Home"



function App() {
  return (
    <Router>
      
       <Navbar />

        <Routes>
          <Route path="/Mainv2" exact element={<Mainv2/>} />
          <Route path="/main" element={<Mainv2/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      
    </Router>
    

  );
}

export default App;
