import React, { useState } from 'react'

const CreateTodo = ({setTodo,insertTodo}) => {
    const [input, setInput] = useState("")

    function addTodo(){
        insertTodo(setTodo,{name:input, status:false,id:Math.floor(Math.random()*100)})
    }
  return (
    <div>
        <h3>CreateTodo</h3>
        <input type="text" placeholder='Enter Todo' onChange={(e)=> setInput(e.target.value)}/>
        <button onClick={()=> addTodo()}>Add Todo</button>
    </div>
  )
}

export default CreateTodo