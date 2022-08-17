import React, {useEffect} from 'react'
import Logo from '../../images/Habit-logo.png'
import './login.css'
import userIcon from '../../images/user-icon.png'
import passwordIcon from "../../images/password-icon.png"
import facebookIcon from '../../images/facebook-icon.png'
import twitterIcon from '../../images/twitter-icon.png'
import { useLogin } from '../../hooks/useLogin'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../../hooks/useAuthContext'



const Login = () => {
  const [username, setUsername] =  useState("");
  const [password, setPassword] = useState("")
  const {login, error, isLoading, isLogged} = useLogin()
  const [logged, setLogged]= useState(isLogged)
  const navigate = useNavigate();
  const {user} = useAuthContext()


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

      await login(username, password)

      

    }


  return (
    <div className='login-app'>
      <div className='login-container'>
          <img className="habit-logo" src={Logo} />
          <div className="username-div">
            <img src={userIcon} className="username-icon" />
            <input 
            type="username"
             className='username'
              value={username}
              onChange={(event)=>handleChange(event)}
              placeholder="Username"             

              />
          </div>
          <div className="password-div">
            <img src={passwordIcon} className="username-icon" />
            <input type="password" 
            className='password'
             value={password}
             placeholder="Password"             
             onChange={(event)=>handleChange(event)}

              />
          </div>
          <div className="button-div">
            <button disabled={isLoading} onClick={handleSubmit} className='signin-button'>{isLoading ? "Loading..." : "Sign In"}</button>
            <div className='social-button'>
              <button className='facebook-button'><img src={facebookIcon} className="facebook-icon" /></button>
              <button className="twitter-button"><img src={twitterIcon} className="twitter-icon" /></button>
            </div>
            <a className="forgot" href="www.facebook.com">Forgot password?</a>

          </div>
          {error && <div>{error}</div>}
      </div>
    </div>
  )
}

export default Login

{/* <div className='Modal'>
<div className="logo">
  <i className="fa fa-bug" aria-hidden="true"></i> 
  <span> awesome logo </span>
</div>
<form >
  <input type='text' name='username' placeholder='username' />
  <input type='password' name='password' placeholder='password' />
  <button> Sign In</button>
</form>
<div className='social-signin'>
  <button className="fb" ><i className="fa fa-facebook" aria-hidden="true"></i></button>
  <button className="tw"><i className="fa fa-twitter" aria-hidden="true"></i></button>
</div>
  <a href='#'>Lost your password ?</a>
</div> */}