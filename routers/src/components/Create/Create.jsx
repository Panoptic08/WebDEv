import React from 'react'
import { useParams } from 'react-router-dom'
function Create() {
    const {userid} = useParams()
    {/*This is how we can use print the ports on the screen. by routing through different different ports*/}
    return (
        <>  
        <h1 className='text-4xl text-center h-20 w-full bg-indigo-200 text-black'>Create heaven : {userid} </h1>
        </>
    )
}

export default Create
