import './App.css';
import {BrowserRouter as Router , Route} from "react-router-dom";
// import Main from './components/main/Main';
import Mainv2 from "./components/mainv2/Mainv2"

// import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar/Navbar';
import React from 'react'


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      
      <div className='main'>
        <Mainv2 />
      </div>
    </Router>

  );
}

export default App;
