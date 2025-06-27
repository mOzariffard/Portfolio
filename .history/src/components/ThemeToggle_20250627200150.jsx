import React, { useState } from 'react'

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode]= useState(false);
  return (
    <button>
        {isDarkMode ? <Sun/> : <Moon />}
    </button>
  )
}

export default ThemeToggle