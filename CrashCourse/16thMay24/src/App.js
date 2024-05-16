import logo from "./logo.svg";
import "./App.css";
import ThemeProvider, { ThemeContext } from "./contest/ThemeContest";
import Navbar from "./contest/Navbar";
import Home from "./contest/Home";
import Footer from "./contest/Footer";
import { lightTheme, darkTheme, commonStyles } from "./style";
import { useContext } from "react";
import { TodoProvider } from "./todocontest/TodoContext";
import TodoList from "./todocontest/TodoList";

const AppContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themeStyles = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <Navbar themeStyles={themeStyles} commonStyles={commonStyles} />
      <Home
        themeStyles={themeStyles}
        commonStyles={commonStyles}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <Footer themeStyles={themeStyles} commonStyles={commonStyles} />
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
       <AppContent />
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
