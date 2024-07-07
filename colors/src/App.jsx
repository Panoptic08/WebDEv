import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
const [color, changecolor] = useState("black");
  return(
  
    <div className='h-dvh  size-full  duration-200' style={{backgroundColor: color}}>
      <div className='fixed inset-x-4 items-center justify-center bottom-14 text-white'>
      <h1 style={{ color: 'grey', fontSize: '2rem', marginBottom: '50px',marginRight: "4%" }}>Change Me</h1>
      <button className='text-black h-10 w-20 border-2 border-indigo-600  rounded-xl' style={{backgroundColor: "white",marginRight: "5%"}} onClick={()=>window.location.reload()}>Reset </button> <br /><br />
        <div className=' h-16  w-1/3  rounded-xl p-3' style={{backgroundColor: "white" , marginLeft: "30%"}}> 

        <button className='text-black h-10 w-20 border-2 border-indigo-600  rounded-xl' style={{backgroundColor: "red",marginRight: "5%"}} onClick={()=>changecolor("red")}>Red</button>
        
        <button className='text-black h-10 w-20 border-2 border-indigo-600  rounded-xl' style={{backgroundColor: "lightblue",marginRight: "5%"}} onClick={()=>changecolor("lightblue")}>Blue</button>
        
        <button className='text-black h-10 w-20 border-2 border-indigo-600  rounded-xl' style={{backgroundColor: "green",marginRight: "5%"}} onClick={()=>changecolor("lightgreen")}>Green</button>

        <button className='text-black h-10 w-20 border-2 border-indigo-600  rounded-xl' style={{backgroundColor: "yellow",marginRight: "5%"}} onClick={()=>changecolor("olive")}>Yellow</button>
        
        </div>
      </div>


    </div>
    
  )
}

export default App
