import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodoProvider from "./components/TodoContext.jsx";
import { ThemeProvider } from "./components/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <TodoProvider>
      <App />
    </TodoProvider>
    </ThemeProvider>
  </React.StrictMode>
);
