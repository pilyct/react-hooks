import React, { useState } from 'react'
import './HookUseContext.css'
import FunctionContext from './FunctionContext'
import ClassContext from './ClassContext'
import { ThemeProvider } from './CustomContext' // ONLY for Function Component

// ---- ONLY for Class Component
export const ThemeContext = React.createContext()
// ---- ONLY for Class Component


export default function HookUseContext() {

  // ---- ONLY for Class Component
  const [darkTheme, setDarkTheme] = useState(true) // darktheme is enabled? True

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }
  // ---- ONLY for Class Component

  return (
    <div className='hook'>
      <div className='context-title'>Example: <span>Toggle Context</span></div>
        <div className='note'>Note: Apply context in function and/or class components is different. </div>
        <ul className='context-list'>
          <li>
            <div className='note'><span>Class</span> - createContext() + .Consumer() </div>
          </li>
          <li>
            <div className='note'><span>Function</span> -  createContext() + useContext() Hook || Custom Hook </div>
          </li>
        </ul>

        <div className='context-example'>
          {/* Class */}
          <ThemeContext.Provider value={darkTheme}>
            <ClassContext />
            <button onClick={toggleTheme} className='context-button'>Toggle Class Context</button>
          </ThemeContext.Provider>

          {/* Function */}
          <ThemeProvider>
            <FunctionContext />
          </ThemeProvider>
        </div>

      {/* <button className='context-button' onClick={toggleTheme}>Toggle Context</button> */}
    </div>
  )
}
