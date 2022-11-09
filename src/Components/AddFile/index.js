import React, { useState,useContext } from 'react'
import '../PopUp/style.css'
import valueToImport from '../Context'
import Selector from '../Selector'


export default function AddTask() {
    const [title, settitle] = useState('')
    const [category, setcategory] = useState('')
    const [description, setdescription] = useState('')
    const {setAdd,setTasks,status, setstatus} = useContext(valueToImport)


    const handleSave = () => {
        setTasks(prev=>{
           return [...prev, {_id:Math.random(), title: title, category:category, status: status, description: description }]
        })
        settitle('')
        setcategory('')
        setstatus('')
        setdescription('')
        setAdd(false)
    }

  return (
      <div className='popUp'>
        <div className='container'>
            <div className='buttonDiv'> 
            <button className='close' onClick={()=>setAdd(false)}>X</button>
            </div>
            <h1 id='text'>Add a new task</h1>
            <div className='inps'>
                
           <div className='inpDiv'> 
           <input placeholder='Add a title' type='text' value={title} onChange = {(e)=>{
            settitle(e.target.value.toUpperCase())
           }}/>
           </div>
           <div className='inpDiv'> 
            <input placeholder='Add a category' type='text' value={category} onChange = {(e)=>{
            setcategory(e.target.value.toUpperCase())
           }}/>
           </div>
           <div className='inpDiv'> 
           <input placeholder='Add a description' type='text' value={description} onChange = {(e)=>{
            setdescription(e.target.value)
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