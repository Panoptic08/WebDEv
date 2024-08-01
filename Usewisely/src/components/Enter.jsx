import React from 'react'
import { Link } from 'react-router-dom'
function Enter() {
    return (
        <>
        <h1 className='text-4xl py-4 bg-black text-white h-20 rounded' style={{marginTop: "-2.5%"}}>Feed tasks</h1>
        <div className='bg-white h-96 w-96 rounded-xl mt-28 border-2 border-black text-center' style={{marginLeft: "35%"}}>
        <form action="">
            <input type="text" name="" id="" placeholder='Enter Task' className='mt-10 h-10 w-64 rounded border-black border-2'/>
            <Link to='/result'>
            <button className='mt-40 mr-5 bg-yellow-200 h-12 w-28 rounded-xl hover: scale(100) text-xl border-black border-2'>Get Started</button>
            </Link>
        </form>
        </div>
        </>
    )
}

export default Enter
