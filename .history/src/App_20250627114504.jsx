import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className=' text-7xl'> Hello world!!</h1>
      </div>
    </>
  )
}

export default App
