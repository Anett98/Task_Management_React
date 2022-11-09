import React, { useContext } from 'react'
import './style.css'
import valueToImport from '../Context'

export default function Tasks({status}) {
  const {tasks,handleTrigger} = useContext(valueToImport)

  
     return (
    <div className='blocks'>
        {tasks.filter(item=>item.status === status).map(task=>{
            return <div className='projects' key={task._id}>
                <div className='title'> Title:  { task.title} </div>
                <div  className='category'> Category: { task.category} </div>
                <div  className='status'> Status: { task.status} </div>
                <button onClick={()=>handleTrigger(task._id)} className='EditBtn'>Edit</button>
                </div>
        })}
    </div>
  )
}
