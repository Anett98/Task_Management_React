import React, { useState,useContext } from 'react'
import './style.css'
import valueToImport from '../Context'
import Selector from '../Selector'

export default function Popup({props}) {
    const [etitedTitle, setetitedTitle] = useState('')
    const [editedCategory, seteditedCategory] = useState('')
    const {setTrigger,setTasks,tasks,status,setstatus} = useContext(valueToImport)

    const handleSave = () => {
        const {id} = props
        setTasks(prev=>{
            return prev.map(task=>{
                if(task._id === id) {
                    if(etitedTitle || editedCategory || status) {
                        return {...task, title: etitedTitle?etitedTitle:task.title,
                                category: editedCategory?editedCategory:task.category, 
                                status: status?status:task.status}
                    }  
                    return task
                }
                return task
            })
        })
        console.log(tasks);
        setetitedTitle('')
        seteditedCategory('')
        setstatus('')
        setTrigger(false)
    }

  return (
      <div className='popUp'>
        <div className='container'>
            <div className='buttonDiv'> 
            <button className='close' onClick={()=>setTrigger(false)}>X</button>
            </div>
            <h1 id='text'>Edit the task</h1>
            <div className='inps'>
                
           <div className='inpDiv'> 
           <input placeholder='Edit the title of the task' type='text' value={etitedTitle} onChange = {(e)=>{
            setetitedTitle(e.target.value.toUpperCase())
           }}/>
           </div>
           <div className='inpDiv'> 
            <input placeholder='Edit the category of the task' type='text' value={editedCategory} onChange = {(e)=>{
            seteditedCategory(e.target.value.toUpperCase())
           }}/>
           </div>
           <Selector/>
           </div>
           <div className='closeButtonDiv'> 
           <button className='save' onClick={handleSave}>Save</button> </div>
      </div> 
    </div>
  )
}