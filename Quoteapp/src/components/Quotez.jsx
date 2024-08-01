import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getquote } from '../features/Slice';

function Quotez() {
    const dispatch = useDispatch()
    const[quote, setQuote] = useState("Loading.././ ")
    const [color, setColor] = useState('white');
    const [count, setCount] = useState(0);


    const fetchq = ()=>{
        dispatch(getquote(quote))
    }

    const next =()=>{
        setQuote(fetchq)
    }


    const increase = () => {
      setCount(count + 1);
    };
  
    return (
        <>
       <div className='bg-white h-64 w-96 rounded-xl ml-96 mt-28 p-4'>
        <h1 className='p-4 text-2xl'>Quotes to make your day!</h1>
        <hr />
        <div className='p-2 mt-4 bg-yellow-400 rounded-xl w-auto'>" {quote} "</div>
        <br /> 
        <br />
        <br />
        <hr />
       </div>

       <div className='flex justify-evenly mt-8 mr-10'>
        <button className='text-black h-12 w-20 bg-white'>heart</button>
        <button className='text-black h-12 w-20 bg-white' onClick={next}>next</button>
       </div>
         
        </>
    )
}

export default Quotez
