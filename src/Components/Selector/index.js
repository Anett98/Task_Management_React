import React,{useContext} from 'react'
import valueToImport from '../Context'

export default function Selector() {
    const statuses = ['','blocked', 'todo', 'in progress', 'done']
    const {status, setstatus} = useContext(valueToImport)


  return (
    <div>
        <div > 
           <label className='selectOpt' for="cars">Select status:</label>
                 <select className='selection' value={status} onChange = {(e)=>{setstatus(e.target.value)}} id='status'>
                    {statuses.map(status=><option key={status}>{status}</option>)}
                </select>
           </div>
    </div>
  )
}
