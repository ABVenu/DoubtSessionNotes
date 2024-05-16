import React from 'react';

const EachTodo = ({ todo, handleToggle, todos, setTodos }) => {
  const handleChangeStatus = () => {
    handleToggle(todo.id, todos, setTodos);
  };

  return (
    <div>
      <h1>Text: {todo.text}</h1>
      <h2>Status: {todo.status ? "Completed" : "Pending"}</h2>
      <button onClick={handleChangeStatus}>Change Status</button>
    </div>
  );
};

export default EachTodo;