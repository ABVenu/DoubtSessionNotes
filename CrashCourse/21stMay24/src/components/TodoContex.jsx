

import { createContext } from "react";
//1. create context
export const TodoContext = createContext();

//2. Provide context

export const TodoProvider = ({ children }) => {

  const handleChange = (indId, setTodo) => {
    setTodo((prevTodos) =>
      prevTodos.map((el, i) =>
        el.id == indId ? { ...el, status: !el.status } : el
      )
    );
  };

  return (
    <TodoContext.Provider value={{ handleChange }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
