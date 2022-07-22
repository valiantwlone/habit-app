import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route} from "react-router-dom";
import Main from './components/main/Main';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar/Navbar';
import React from 'react'


function App() {
  return (
    <Router>
      <Navbar />
      
      <div className="App">
        <Main />
      </div>
    </Router>

  );
}

export default App;
