import React, { useContext, useState } from 'react'
import EachTodo from './EachTodo'
import { TodoContext } from './TodoContext'
import CreateTodo from './CreateTodo'

const Todo = ({themeColor}) => {

    //it is a parent component
    // 3. consume context
    const {toggleStatus,insertTodo} = useContext(TodoContext)

const [todo,setTodo] = useState([
        {id:1,name:"Learn React",status:false},
        {id:2,name:"Learn Context Api",status:false}
    ])
  return (
    <div style={{color:"gray",backgroundColor:"white",...themeColor,display:"flex",flexDirection:"column",gap:"30px",justifyContent:"center",alignItems:"center",margin:"auto",width:"60%"}}
>
        <CreateTodo setTodo={setTodo} insertTodo={insertTodo} />
        {todo.map((el,i)=> <EachTodo key={el.id} todo={el} toggleStatus={toggleStatus} setTodo={setTodo} />)}
    </div>
  )
}

export default Todo