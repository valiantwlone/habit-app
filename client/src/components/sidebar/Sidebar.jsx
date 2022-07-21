import React from 'react'
import "./sidebar.css"
import "../../style.css"

const Sidebar = () => {

function consolelog(){
    console.log("helloworld")
}
  return (
    <div onClick={consolelog} className='sidebar-body'>Sidebar</div>
  )
}

export default Sidebar