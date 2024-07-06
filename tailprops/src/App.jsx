import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Compo from './components/Compo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-blue-400 text-black p-4 rounded-xl'>Hello Tailwind</h1>
    <Compo />
    </>
  )
}

export default App
