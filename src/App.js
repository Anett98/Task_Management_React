import './App.css';
import Tasks from './Components/Task';
import Popup from './Components/PopUp';
import { useState,useEffect } from 'react';
import { data } from './Components/Data';
import valueToImport from './Components/Context';
import AddTask from './Components/AddFile';

const statuses = ['blocked', 'todo', 'in progress', 'done']
function App() {
  const [tasks,setTasks] = useState([])
  const [trigger,setTrigger] = useState(false)
  const [add,setAdd] = useState(false)
  const [forEdit,setforEdit] = useState(null)
  const [status, setstatus] = useState('')
  
  const handleTrigger = (id) => {
    setTrigger(true)  
    setforEdit({id})  
   }
 
       useEffect(()=>{
        setTasks(data)
    },[]) 

  return (
    <valueToImport.Provider value = {{status, setstatus,setAdd,statuses,setTasks,tasks,trigger,setTrigger,forEdit,setforEdit,handleTrigger}}>
    <div className='header'>
      <div className='headTitile'>Tasks</div>
    <button className='addBtn' onClick={()=>setAdd(!add)}>+</button>
      {add&&<AddTask/>}
    </div>
    <div className="App">
    {statuses.map(status=>{
       return <div className='divs' key={status}>
          <h1>{status.toUpperCase()}</h1>
          <Tasks status = {status}/>
        </div>
      })}
     {trigger&&<Popup props={forEdit}/>}
    </div>
    </valueToImport.Provider>
  );
}

export default App;