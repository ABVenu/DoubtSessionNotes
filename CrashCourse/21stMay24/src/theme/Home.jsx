import React from 'react'
import Todolist from '../components/Todolist'

const Home = ({appliedTheme}) => {
  return (
    <div  style={{width:"100%", height:"500px", ...appliedTheme}}>
        <h3>This is Home Compnent</h3>
        <Todolist />
    </div>
  )
}

export default Home