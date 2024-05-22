//1. createContext

import { createContext, useState } from "react";

export const ThemeContext = createContext();

//2. Provide Context
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
   
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
