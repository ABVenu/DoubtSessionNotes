import React from 'react'

const Eachtodo = ({todo, handleChange,setTodo}) => {

    function toggleStatus(){
        handleChange(todo.id,setTodo )
    }
  return (
    <div >
        <h4>tittle:- {todo.title}</h4>
        <h4>status:- {todo.status? "completed":"pending"}</h4>
        <button onClick={toggleStatus}>Change Status</button>
    </div>
  )
}

export default Eachtodo