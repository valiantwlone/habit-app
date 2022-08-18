import React from 'react'
import './mainv2.css'
import {useState, useEffect} from 'react'
import axios from 'axios';
import {nanoid} from 'nanoid'
import Alert from 'react-bootstrap/Alert';
import Fade from 'react-bootstrap/Fade'
import { useAuthContext } from '../../hooks/useAuthContext';
const API_BASE = 'http://localhost:3001';

function Mainv2 () {

  const[tasks, setTasks]= useState([]);
  const[newTaskActive , setNewTaskActive]= useState(false)
  const [newTodo, setNewTodo] = useState("");
  const [newTaskBody, setNewTaskBody] = useState ("")
  const [success , setSuccess] = useState (false)
  const {user} = useAuthContext()

  
  const ref = React.useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };

  useEffect( ()=>{
  
      GetTasks()

    

  },[user])

  useEffect( ()=>{
    
    newTaskActive && handleClick()
    setNewTaskBody("")

 },[newTaskActive])



  const GetTasks =  async()=> {
    if(!user){
      console.log('You must be logged in')
      return
    }
   console.log(user)
    const response = await axios.get(API_BASE+"/Tasks",{
      params :{
        'username' : `${user.username}`
      },
      headers:{
        'Authorization' : `Bearer ${user.token}`
      }

    })
    .then(res => setTasks(res.data))
    .catch (err => console.error("Error :", err))
    //  await axios.get(API_BASE+"/Tasks")
    //   .then(res => setTasks(res.data))
    //   .catch (err => console.error("Error :", err));
  }

  const deleteTask =  async(id)=> {
    await axios.delete(API_BASE+"/Tasks/" + id, {
      headers:{
        'Authorization' : `Bearer ${user.token}`
      }
    } )
     .then(res => console.log(res.data))
     .catch (err => console.error("Error :", err));

     setTasks(tasks => tasks.filter(task => task._id !== id))
 }

 const handleChange=(event)=>{
  const value= event.target.value
  console.log(value)
  setNewTaskBody(value);
  console.log(tasks)



 }

 const submitNewTask = async(newTaskBody) =>{
  const newNanoid = nanoid()
  const newTaskData = { 
      "id" : newNanoid,
      "username" : user.username,
      "body" : newTaskBody,
      "ticked" : false
  }
  console.log(newTaskData)
  await axios.post(API_BASE+"/Tasks/add",newTaskData, {
    headers:{
      'Authorization' : `Bearer ${user.token}`
    }
  })
  .then(res=> console.log(res.data))
  .then(setNewTaskActive(!newTaskActive))
  .then(setSuccess(true))
  .catch (err => console.error("Error :", err));

  GetTasks();
    // setTasks(tasks => tasks.push(newTaskData))
  console.log(tasks)
 }

  function Console(data){
    console.log(data);
  }

  const completeTask= async (id) =>{

    const taskdata=(tasks.filter(task => task._id===id))
    taskdata[0].ticked = !taskdata[0].ticked
    console.log(taskdata[0].ticked)
     axios.post(API_BASE + "/tasks/update/" + id, taskdata[0],{
      headers:{
        'Authorization' : `Bearer ${user.token}`
      }
    })
    .then(res => console.log(res))


    setTasks(tasks => tasks.map(task =>(
      task._id===taskdata[0]._id ?
      {...task ,
      ticked: taskdata[0].ticked } : task
      
    )))
    console.log(tasks)

  }


  

  return (
    <div className='main-container'>

        <h1>{user && `hello ${user.username}` }  </h1>
        <h4>Your Tasks</h4>
        <div className="todos">
          {tasks && tasks.map(task =>(
            <div 
            className={"todo "+(task.ticked && "is-complete")} 
            key={task._id}
            
            >
              <div 
              onClick={()=>completeTask(task._id)}
              className="checkbox"></div>
              <div className="text">{task.body}</div>
              <div 
              className="delete-todo"
              onClick={()=>deleteTask(task._id)}
              >x</div> 
          </div>
          ))}
          {newTaskActive &&
            <div 
            className="todo " 
            >
              <div className="checkbox"></div>
              <input 
              ref={ref}
              className="text"
              onChange={(event)=>handleChange(event)}
              value={newTaskBody}
              >
              </input>
              <div 
              onClick={()=> submitNewTask(newTaskBody)}
              className="submit-todo"
              >✓</div>
              <div 
              onClick={()=> setNewTaskActive(!newTaskActive)}
              className="delete-todo"

              >x</div> 
          </div>
          }
          {success && <Fade in="true"><Alert dismissable="true" variant="success" transition="fade"> New Task Added ! </Alert></Fade>}
        </div>
      <div onClick={()=> {setNewTaskActive(!newTaskActive);}} className="add-task">+</div>

    </div>
  )
}

export default Mainv2