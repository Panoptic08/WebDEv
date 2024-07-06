import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'  
import './App.css'
import Compo from "./components/comp"

function App() {
  
  return (
    <>
    <h1 className='bg-blue-400 text-black p-4 rounded-xl'>Hello Tailwind</h1>
    <Compo name = "Sign Up" emp = "Already have an account?: create it" go = "Get Started"/>      
    <Compo name = "Log In" emp = ""/>      
    <Compo name = "Log In" emp = ""/>      
    </>
  )
}

export default App
