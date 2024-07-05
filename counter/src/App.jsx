import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let count = 0;
function add(){
  count+=1;
  console.log("Value: ",count);
}
function sub(){
  count-=1;
  console.log("Value2: ",count);
}
function App() {

  return (
    <>
     <h1>Universe</h1>

     <h2>Counter: {count}</h2>
     <button onClick={add}>+</button>
     <br /><br />
     <button onClick={sub}>-</button>

    </>
  )
}

export default App
