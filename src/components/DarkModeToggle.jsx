import React, { useState } from 'react'

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <button onClick={handleToggle} style={{backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000'}}>
      {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
