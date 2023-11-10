import React, { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import { ThemeProvider } from './context/theme'
import Login from './component/Login'
import Profile from './component/Profile'
import './App.css'

function App() {
  const [themeMode, setThemeMode] = useState()
  function handleClick(){
    setThemeMode(prev =>{
      if (prev === "light"){
        return "dark"
      }
      return "light"
    })
  }
  React.useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return ( 
    <UserContextProvider>
      <ThemeProvider value ={{themeMode}} >
        <Login/>
        <button 
          className='p-1 m-2 bg-slate-800 text-white rounded-sm'
          onClick={handleClick}
        >Change Theme</button>
        <Profile/>

      </ThemeProvider>
    </UserContextProvider> 
  ) 
}

export default App
