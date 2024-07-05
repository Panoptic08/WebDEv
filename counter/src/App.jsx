import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,updateme] = useState(0)

  function add(){
    if(counter<20){updateme(counter+1)}
    else{
      alert("Exceeded 20");
    }
  }

  function sub(){
    if(counter>0){updateme(counter-1)}
    else{
      alert("Going Negative.");
    }
  }
  
  return (
    <>
    <h1>Universe</h1>
    <h2>Count on me: {counter}</h2>
    <button onClick={add}>+</button>
    <button onClick={sub}>-</button>
    </>  
  )
}

export default App
