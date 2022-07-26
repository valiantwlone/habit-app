import React from 'react'
import Task from '../task/Task'
import {data} from "../../data.js"
import "../../style.css"
import './main.css'
const API_BASE = 'localhost:3001';



const Main = () => {
  // window.localStorage.clear();
  // localStorage.setItem("tasks",JSON.stringify(data));

  const [tasks, setTasks]= React.useState(() => JSON.parse(localStorage.getItem("tasks")) || []);
  const [currentTaskId, setCurrentTaskId] = React.useState(
    tasks[0]  &&   "")

    React.useEffect(() => {
      fetch("http://localhost:3001/tasks")
      .then(res => res.json())
      .then(data =>setTasks(data))
    
    },[])



React.useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks))


}, [tasks])



  function updateTask(event) {

    
    setTasks(oldTasks => oldTasks.map(oldTask =>{
      return oldTask.id===tasks[currentTaskId].id ?
      {... oldTask , 
      body: event.target.value} : oldTask
    }))

//comentt


}
  function updateTicked(id){

    setTasks(oldTasks => oldTasks.map(oldTask =>{
      return oldTask.id ===id ?
      {... oldTask , 
        ticked : oldTask.ticked ? false : true  }: oldTask

    }))
   
  }



function createNewTask(tasks){


   if(tasks[tasks.length-1].body){
     const newTaskData = {"id": (tasks.length), "body":"", "ticked": false}
      setTasks(oldTasks => [...oldTasks, newTaskData]);
   }


}








  return (
    <div className='main-container'>

          <h1 className='main-title'>These are your tasks today , Valiant.</h1>
          <h4> Your tasks</h4>
          <Task
          tasks={tasks}
          updateTask={updateTask}
          setCurrentTaskId={setCurrentTaskId}
          currentTaskId={currentTaskId}
          // currentTask= {findCurrentTask()}
          updateTicked={updateTicked}
          createNewTask={createNewTask}
          />
  
    </div>
  )
}

export default Main