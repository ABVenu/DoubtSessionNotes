import React, { useContext, useState } from 'react'
import Eachtodo from './Eachtodo'
import { TodoContext } from './TodoContex'

const Todolist = () => {
    const [data,setData] = useState([
        {id:1, title:"Learn React",status:false},
        {id:2, title:"Learn Node",status:false},
        {id:3, title:"Learn JS",status:false}
    ])

    //3. consume the created context

   const { handleChange } = useContext(TodoContext)
   
  return (
    <div>
        {data.map((el,i)=> 
        <div key={i}>
            <Eachtodo  todo={el} handleChange={handleChange} setTodo={setData}/>
            </div>
        )}
    </div>
  )
}

export default Todolist