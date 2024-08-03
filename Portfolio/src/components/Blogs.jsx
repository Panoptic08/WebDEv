import React from 'react'
import blog from "../images/blog.jpg"
import blog2 from "../images/blog2.jpg"
import blog3 from "../images/blog3.jpg"
import blog4 from "../images/blog4.jpeg"

function Blogs() {
    return (
        <>
       <div id='blogs'>

    <div>
        <h1 className='text-blue-200 text-center text-4xl mt-40'>Blogs</h1>
    </div>

    <div className='flex justify-evenly'>
    <div className='bg-white h-96 w-96 mt-20 ml-10 rounded-xl p-4 hover:scale-110'>
          <img src={blog} alt="" className='h-64 w-48 mt-5 ml-20' />
          <h1 className='text-center mt-5 text-2xl'>Debug the Rotten</h1>
    </div>

    <div className='bg-white h-96 w-96 mt-20 ml-10 rounded-xl p-4 hover:scale-110'>
          <img src={blog2} alt="" className='h-64 w-48 mt-5 ml-20' />
          <h1 className='text-center mt-5 text-2xl'>Context API simplified</h1>
    </div>



    <div className='bg-white h-96 w-96 mt-20 ml-10 rounded-xl p-4 hover:scale-110'>
          <img src={blog3} alt="" className='h-64 w-48 mt-5 ml-20' />
          <h1 className='text-center mt-5 text-2xl'>Redux !</h1>
    </div>
    </div>

    <div className='flex justify-evenly'>
    <div className='bg-white h-96 w-96 mt-20 ml-10 rounded-xl p-4 hover:scale-110'>
          <img src={blog4} alt="" className='h-64 w-48 mt-5 ml-20' />
          <h1 className='text-center mt-5 text-2xl'>Appwrite a beginners guide</h1>
    </div>

    <div className='bg-white h-96 w-96 mt-20 ml-10 rounded-xl p-4 hover:scale-110'>
          <img src={blog4} alt="" className='h-64 w-48 mt-5 ml-20' />
          <h1 className='text-center mt-5 text-2xl'>Appwrite a beginners guide</h1>
    </div>


    <div className='bg-white h-96 w-96 mt-20 ml-10 rounded-xl p-4 hover:scale-110'>
          <img src={blog4} alt="" className='h-64 w-48 mt-5 ml-20' />
          <h1 className='text-center mt-5 text-2xl'>Appwrite a beginners guide</h1>
    </div>
    
    
    </div>
    
       </div>
        </>
    )
}

export default Blogs
