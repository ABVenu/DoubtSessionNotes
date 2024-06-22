import React from 'react'

const EachTodo = ({todo,setTodo,toggleStatus}) => {
   
    function handleStatus(todo){
        toggleStatus(setTodo,todo)
    }
    
  return (
    <div>
        <h3>Name: {todo.name}</h3>
        <h3>Status: {todo.status? "Completed":"Pending"}</h3>
        <button onClick={()=>handleStatus(todo)}>Change Status</button>
    </div>
  )
}

export default EachTodo