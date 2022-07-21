import React from 'react'
import Task from '../task/Task'
import {data} from "../../data.js"
import Sidebar from '../sidebar/Sidebar';
import Split from 'react-split'
import "../../style.css"


const Main = () => {
  // window.localStorage.clear();
  // localStorage.setItem("tasks",JSON.stringify(data));

  const [tasks, setTasks]= React.useState(() => JSON.parse(localStorage.getItem("tasks")) || []);
  const [currentTaskId, setCurrentTaskId] = React.useState(
    tasks[0]  &&   "")

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
    <div>
        <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
        >
          <Sidebar />
          <Task
          tasks={tasks}
          updateTask={updateTask}
          setCurrentTaskId={setCurrentTaskId}
          currentTaskId={currentTaskId}
          // currentTask= {findCurrentTask()}
          updateTicked={updateTicked}
          createNewTask={createNewTask}
          />
        </ Split >


    </div>
  )
}

export default Main