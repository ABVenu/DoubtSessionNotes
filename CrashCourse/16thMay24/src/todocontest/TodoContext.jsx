import React, { createContext, useContext } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const handleToggle = (id, todos, setTodos) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ handleToggle }}>
      {children}
    </TodoContext.Provider>
  );
};

export const UseTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("UseTodo must be used within a TodoProvider");
  }
  return context;
};