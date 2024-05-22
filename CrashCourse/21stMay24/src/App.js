import logo from "./logo.svg";
import "./App.css";
import Todolist from "./components/Todolist";
import TodoProvider from "./components/TodoContex";
import { ThemeContext, ThemeProvider } from "./theme/ThemeContext";
import Navbar from "./theme/Navbar";
import Home from "./theme/Home";
import Footer from "./theme/Footer";
import { useContext } from "react";
import { darkTheme, lightTheme } from "./style";

const ThemedApp = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const appliedTheme = theme == "light" ? lightTheme : darkTheme;
  return (
    <>
      <Navbar changeTheme={changeTheme} appliedTheme={appliedTheme} />
      <Home appliedTheme={appliedTheme} />
      <Footer appliedTheme={appliedTheme} />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <TodoProvider>
          <ThemedApp />
        </TodoProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
