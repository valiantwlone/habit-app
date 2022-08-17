import React, { Component , useContext, useState} from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogin } from '../../hooks/useLogin';


const Home = () => {

  const {user}=useAuthContext()
  console.log(user)


  return (
    <div>
      {console.log(user)}
      {user ? <h1>Hello Wellcome, {user.username}</h1> : <h1>Please Login or Signup !</h1>}
    </div>
  )
}

export default Home