import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

{/*https://type.fit/api/quotes   API for todays project.*/}  


function App() {

  // const[counter, count] = useState(0)
  // function count(){
  //   // counter++;
  // }
  let count = 0;
  

  return (
    <>
    <div className='' style={{marginBottom: "80%"}}>
    
    <div className='w-96 h-64 rounded-xl text-black' style={{backgroundColor: "white"}}>
      <div>Main</div>
    </div>    
   
    <div style={{display: "flex", justifyContent: "space-between", marginTop: "1%"}}>
   
    <div className='flex justify-center '>
      
      <button className='bg-white rounded-xl h-15 duration-200 border-4 border-black hover:scale-105' ><img src="/images/heart.png" alt="" className=' bg-white h-8 '/>
      </button>
      <label>{count}</label>
    
    </div>
    
    <div className=' '>
    <button className='flex justify-center duration-200 border-2 border-black hover:scale-105' style={{backgroundColor: "grey"}}><img src="/images/next.png" alt=""  className='h-7'/>
    </button>
    </div>

    </div>
    
    </div>
    
    </>
  )
}

export default App
