import React, { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode]= useState(false);

    const toggleTheme=()=>{
        if(isDarkMode){

            setIsDarkMode(false);
        }else{
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
    }
  return (
    <button onClick={toggleTheme}>
        {isDarkMode ? <Sun className='h-6 w-6 text-yellow-300'/> : <Moon className='h-6 w-6 text-blue-900' />}
    </button>
  )
}

export default ThemeToggle