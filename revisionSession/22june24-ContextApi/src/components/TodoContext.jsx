import React, { useState } from 'react'
import { createContext } from "react";

/// 1. create context
export const TodoContext = createContext()

/// 2. Provide Context
export const TodoProvider = ({children}) => {
    
    // toggle status

    function toggleStatus(setTodo,indTodo){
        setTodo((prevTodo)=> prevTodo.map((el,i)=> el.id==indTodo.id? {...el,status: !el.status}: el))
    }

    function insertTodo(setTodo,newTodo){
        setTodo((prevTodo)=> [...prevTodo,newTodo])
    }

  return (
    <TodoContext.Provider value={{toggleStatus,insertTodo}}>
       {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider