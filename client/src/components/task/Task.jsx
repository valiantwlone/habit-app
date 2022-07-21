import React from 'react'
import "./task.css"
import TextareaAutosize from 'react-textarea-autosize';


const Task = (props) => {


    const taskElements= props.tasks.map((task,index) =>(
    
    <div>
        <div className="task-container" key={task.id}>

            <h1 className='taskId' name="id">{task.id+1}</h1>
            <div
             className= {task.ticked ?'tick' : "untick"}
             name="ticked"
             onClick={()=>{console.log(task.id); props.updateTicked(task.id)}}
            ></div>
            <div>
                <TextareaAutosize 
                id={task.id}
                name="body" 
                className="task" 
                placeholder='Task'
                onClick={(event)=>(props.setCurrentTaskId(event.target.id))}
                onChange={props.updateTask}
                value={task.body}
                />
            </div>
        </div>

        { 
            
        }

    </div>

    ))

  return (
    <div>
        <div>
            {taskElements}
        </div>

        {/* {isEmpty &&
        <div className="task-container">
            <h1 className='taskId' name="id">{parseInt(currentTask.taskId) + 1 }</h1>
            <div className='tick'></div>
            <input name="body" type="text" className="task" placeholder='New Task' onChange={handleChange}/>
        </div> } */}
        
    </div>
  )
}

export default Task