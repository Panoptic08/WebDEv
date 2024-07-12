import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Customhook from '../hooks/customhook'

{/*https://type.fit/api/quotes   API for todays project.*/}  


function App() {
  // const[quote,setquote] =  useState("Quote")
  const[quote, setquote] = useState("Loading ...")
  const [color, setColor] = useState('white');
  const[count,inc] = useState(0)

  const increase = ()=>{
    inc(1); 
  }

  const fetchquote = Customhook();

  useEffect(()=>{
    setTimeout(()=>{
      setquote(fetchquote.q)
    },1000)
  }
  ,[fetchquote])
  
  const getquote = ()=>{
    setTimeout(()=>{
      setquote(fetchquote.q)
    },1000)
  }



  return (  
  
    <div className='' style={{marginBottom: "30%"}}>
    <div className='w-96 h-64 border-4 border-blue-200 rounded-xl text-black' style={{backgroundColor: "white"}}>
      
      
      <div className='text-xl'>Quotes to make your day!</div>
      <br />
      <hr />
      <div className='m-10 text-2xl rounded-xl cursor-pointer bg-yellow-100 text-black'>" {quote} "</div>
      <hr />  

    </div>    
   
    <div style={{display: "flex", justifyContent: "space-between", marginTop: "2%"}} >
   
    <div className='flex justify-center rounded-xl' onClick={increase} style={{backgroundColor: color }}>
    <img src="/images/heart.png" alt="" className=' h-10 m-2' onClick={()=>setColor("pink")}/>  
    </div>
    <label className=' flex m-2 text-xl' style={{marginRight: "60%"}}>{count}</label>
    <div className=''>
    <button className='flex justify-center duration-200 border-2 border-black hover:scale-105' style={{backgroundColor: "grey"}} onClick={getquote}><img src="/images/next.png" alt=""  className='h-7'/>
    </button>
    </div>

    </div>
    
    </div> 
  )


}

export default App
