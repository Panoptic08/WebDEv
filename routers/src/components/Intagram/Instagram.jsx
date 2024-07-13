import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Instagram() {
    const data = useLoaderData()
    // const[data, setdata] = useState(0)
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Panoptic08').then((respose)=> respose.json()).then((data)=>{setdata(data) })    

    // },[])

    return (
        <div className='text-center text-2xl bg-black text-white h-auto w-auto'>
            Github followers :  {data.followers}
            <img className='h-64' src={data.avatar_url} alt=""  style={{marginLeft: "40%"}} />
        </div>
    )
}

export default Instagram

export const loadtooptimize = async ()=> {
    const response = await fetch('https://api.github.com/users/Panoptic08')
    return response.json()
}
