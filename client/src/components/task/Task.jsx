import React from 'react'
import "./task.css"
import TextareaAutosize from 'react-textarea-autosize';
import Button from 'react-bootstrap/Button';



const Task = (props) => {


    const taskElements= props.tasks.map((task,index) =>(
    
    <div>
        <div className="task-container" key={task._id}>

            <h1 className='taskId' name="id">{parseInt(task.id)+1}</h1>
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
            <Button className="update-button" variant="outline-secondary">Update</Button>
            <Button className="dlt-button" variant="outline-secondary">Delete</Button>


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