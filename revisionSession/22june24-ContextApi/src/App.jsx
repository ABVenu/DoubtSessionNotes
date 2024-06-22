import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import { ThemeContext } from './components/ThemeContext'
import { darkTheme, lightTheme } from './style'

function App() {
  const [count, setCount] = useState(0)
  const {theme,changeTheme} = useContext(ThemeContext)
  const [themeColor,setThemeColor] = useState(lightTheme)
  function toggleTheme(theme){
    changeTheme(theme)
    setThemeColor(theme=="light"? lightTheme:darkTheme)
    console.log("theme", theme)
  }
  return (
    <>
    <button onClick={()=>toggleTheme(theme)}>Toggle Theme</button>
      <Todo themeColor={themeColor}/>
      
    </>
  )
}

export default App
