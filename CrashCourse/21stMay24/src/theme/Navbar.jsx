import React from 'react'

const Navbar = ( {changeTheme, appliedTheme}) => {
  return (
    <div  style={{width:"100%",...appliedTheme}}>
        <h3>This is Navbar </h3>
        <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar