import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
    
    return (
        <>
        <div className=''>
        <h1 className='text-4xl text-center py-4 bg-black text-white h-20 '>Earn Your Time</h1>
        </div>
        <div className='text-center'>
            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExejF6Zjhhc29yMzZ2dTBoMjRpaG5xcXJ4dnN4dXVraWEwazZmbnE0OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPwv9exqYPaB03K/giphy.webp" alt="" className='h-96  mt-12 rounded-xl border-black border-2' style={{marginLeft: "37%"}}/>
        </div>

        <div className='text-center'>
            <Link to="/enter">
            <button className='mt-12 mb-10  bg-yellow-400 h-12 hover:scale-y-110 hover:scale-x-110 hover:text-white  w-40 rounded-xl text-xl border-black border-2'>Get Started</button>
            </Link>
        </div>

        <div className='bg-black h-40 text-white flex justify-between items-center p-4'>
  <div className='flex flex-col'>
    <h2 className='text-xl font-bold'>Company Name</h2>
    <p className='text-sm'>© 2024 Company Name. All rights reserved.</p>
  </div>
  <div className='flex space-x-4'>
    <a href='#' className='text-sm hover:underline'>Home</a>
    <a href='#' className='text-sm hover:underline'>About</a>
    <a href='#' className='text-sm hover:underline'>Services</a>
    <a href='#' className='text-sm hover:underline'>Contact</a>
  </div>
  <div className='flex space-x-4'>
    <a href='#' aria-label='Facebook' className='hover:text-gray-400'>
      <i className='fab fa-facebook-f'></i>
    </a>
    <a href='#' aria-label='Twitter' className='hover:text-gray-400'>
      <i className='fab fa-twitter'></i>
    </a>
    <a href='#' aria-label='LinkedIn' className='hover:text-gray-400'>
      <i className='fab fa-linkedin-in'></i>
    </a>
    <a href='#' aria-label='Instagram' className='hover:text-gray-400'>
      <i className='fab fa-instagram'></i>
    </a>
  </div>
</div>
f
        </>
    )
}

export default Start
