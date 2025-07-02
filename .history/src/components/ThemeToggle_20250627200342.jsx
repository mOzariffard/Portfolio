import React, { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode]= useState(false);
  return (
    <button>
        {isDarkMode ? <Sun className='h-6 w-6 text-yellow-300'/> : <Moon />}
    </button>
  )
}

export default ThemeToggle