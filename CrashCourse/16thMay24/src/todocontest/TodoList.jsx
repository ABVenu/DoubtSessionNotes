import React, { useState } from 'react';
import { UseTodo } from './TodoContext';
import EachTodo from './EachTodo';

const TodoList = () => {
  const { handleToggle } = UseTodo();
  const [todos, setTodos] = useState([{
    id: 1,
    text: "Learn React",
    status: false,
  }]);

  return (
    <div>
      <h1>Todos List</h1>
      {todos.map((el) => (
        <EachTodo 
          key={el.id} 
          todo={el} 
          handleToggle={handleToggle} 
          todos={todos} 
          setTodos={setTodos} 
        />
      ))}
    </div>
  );
};

export default TodoList;