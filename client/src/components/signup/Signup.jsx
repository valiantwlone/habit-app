import React from 'react'
import Logo from '../../images/Habit-logo.png'
import './signup.css'
import userIcon from '../../images/user-icon.png'
import passwordIcon from "../../images/password-icon.png"
import facebookIcon from '../../images/facebook-icon.png'
import twitterIcon from '../../images/twitter-icon.png'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useSignup } from "../../hooks/useSignup"
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../../hooks/useAuthContext';


const API_BASE = 'http://localhost:3001';





const Signup = () => {

    const [username, setUsername] =  useState("");
    const [password, setPassword] = useState("")
    const {signup , error, isLoading} = useSignup()
    const navigate = useNavigate();
    const {user} = useAuthContext();

    useEffect(()=>{
      if(user){
        navigate("/home")
      }
    },[user])

    
    const handleChange= (event)=>{
        const value = event.target.value
        console.log(event.target.value)
    
        if(event.target.className === 'username'){
            setUsername(value)
        }
        if(event.target.className === "password"){
            setPassword(value)
        }
    } 

            const handleSubmit= async(e) =>{
                e.preventDefault()

                await signup(username, password)
        // const newUserData ={
        //     "username" : username,
        //     "password" : password
        // }
        // console.log(username)
        // await axios.post(API_BASE+"/users/signup", newUserData)
        // .then(res => console.log(res.data))
        // .catch(err => console.error("Error :" , err))
        
    }

  return (
    <div className='login-app'>
      <div className='login-container'>
          <img className="habit-logo" src={Logo} />
          <div><h1>Sign-Up</h1></div>
          <div className="username-div">
            <img src={userIcon} className="username-icon" />
            <input 
            type="username" 
            className='username' 
            value= {username}  
            onChange={(event)=>handleChange(event)}
            placeholder="Username"
            />
          </div>
          <div className="password-div">
            <img src={passwordIcon} className="username-icon" />
            <input 
            type="password" 
            className='password' 
            value={password}
            onChange={(event)=>handleChange(event)}
            placeholder="Password"             />
          </div>
          <div className="password-div">
            <img src={passwordIcon} className="username-icon" />
            <input 
            type="text" 
            className='password' 
            value=""
            placeholder='Confirm Password'
            />
          </div>
          <div className="button-div">
            <button disabled={isLoading} className='signin-button' onClick={handleSubmit}>Sign Up</button>
            <div className='social-button'>
              <button className='facebook-button'><img src={facebookIcon} className="facebook-icon" /></button>
              <button className="twitter-button"><img src={twitterIcon} className="twitter-icon" /></button>
            </div>
            <a className="forgot" href="www.facebook.com">Forgot password?</a>

          </div>
          {error && <div className='error'>{error}</div>}
      </div>
    </div>
  )
}

export default Signup