import React, { useState } from 'react'
import './App.css';
import axios from 'axios'
export default function () {

  const [task, setTask] = useState()
  const handleAdd = () => {

          axios.post('http://localhost:3001/add',{task:task})
          .then(result => {
            location.reload()
          })
          .catch(err => console.log(err))
  }
  return (
    <div className='create_form'>
        <input 
             type="text" 
             name="" 
             id="" 
             placeholder='Enter Task' 
             onChange={(e) => setTask(e.target.value)}
             />
        <button 
        type='button' 
        onClick={handleAdd}>
          Add
        </button>
    </div>
  )
}
