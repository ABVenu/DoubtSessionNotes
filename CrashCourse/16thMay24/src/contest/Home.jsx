import React from 'react';
import TodoList from '../todocontest/TodoList';

const Home = ({ themeStyles, commonStyles, toggleTheme, theme }) => {
  return (
    <div style={{ ...themeStyles, ...commonStyles, minHeight: '80vh' }}>
      <h1>Home</h1>
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <TodoList />
    </div>
  );
};

export default Home;