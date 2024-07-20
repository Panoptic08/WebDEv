import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import MainBody from './mainbody'
function Start() {
    return (
       <>
    
       <h1 className=' text-4xl text-blue-200 font-bold font-sans	font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'>Personalise Your Socials</h1>
       
       <div className='' style={{marginTop: "10%"}}>
        <img src="https://cdn.iconscout.com/icon/free/png-512/free-linked-17-437632.png?f=webp&w=256" alt=""  className='h-20'/>
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/horizontal-line-9675512-7846589.png?f=webp&w=256" alt=""  className='h-20'/>
        <img src="https://cdn.iconscout.com/icon/free/png-512/free-github-159-721954.png?f=webp&w=256" alt=""  className='h-20'/>
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/horizontal-line-9675512-7846589.png?f=webp&w=256" alt=""  className='h-20'/>
        <img src="https://cdn.iconscout.com/icon/free/png-512/free-youtube-268-721990.png?f=webp&w=256  " alt=""  className='h-20'/>
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/horizontal-line-9675512-7846589.png?f=webp&w=256" alt=""  className='h-20'/>
        <img src="https://cdn.iconscout.com/icon/free/png-512/free-instagram-1868978-1583142.png?f=webp&w=256" alt=""  className='h-20'/>
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/horizontal-line-9675512-7846589.png?f=webp&w=256" alt=""  className='h-20' style={{ marginLeft: "7%", transform: "rotate(90deg)" , marginTop: "-7%" }}  />
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/horizontal-line-9675512-7846589.png?f=webp&w=256" alt=""  className='h-20' style={{ marginLeft: "15%", transform: "rotate(90deg)" , marginTop: "-6.5%" }}  />
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/horizontal-line-9675512-7846589.png?f=webp&w=256" alt=""  className='h-20' style={{ marginLeft: "23%", transform: "rotate(90deg)" , marginTop: "-6.7%" }}  />
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/horizontal-line-9675512-7846589.png?f=webp&w=256" alt=""  className='h-20' style={{ marginLeft: "31%", transform: "rotate(90deg)" , marginTop: "-6.8%" }}  />


    
       <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/horizontal-line-9675512-7846589.png?f=webp&w=256" alt=""  className='h-20' style={{ marginLeft: "7%", transform: "rotate(90deg)" , marginTop: "-45%" }}  />
       <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/horizontal-line-9675512-7846589.png?f=webp&w=256" alt=""  className='h-20' style={{ marginLeft: "15%", transform: "rotate(90deg)" , marginTop: "-6.5%" }}  />
       <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/horizontal-line-9675512-7846589.png?f=webp&w=256" alt=""  className='h-20' style={{ marginLeft: "23%", transform: "rotate(90deg)" , marginTop: "-6.5%" }}  />
       <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/horizontal-line-9675512-7846589.png?f=webp&w=256" alt=""  className='h-20' style={{ marginLeft: "31%", transform: "rotate(90deg)" , marginTop: "-6.5%" }}  />

        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/social-media-3022554-2512980.png?f=webp&w=256" alt=""  className='h-20' style={{marginLeft: "38%", marginTop: "-8%"}}/>
        <img src="https://cdn.iconscout.com/icon/free/png-512/free-meta-6823273-5582655.png?f=webp&w=256" alt=""  className='h-20' style={{marginLeft: "38%", marginTop: "34%"}}/>

       </div>
       
       <div>
        <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzdxdGs4Ync4aHB1bGZoZmk0Y3RmOXVlNzliMzB3YzgwcmN5d2VlaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6fJgxWzRPz3nxtu0/giphy.webp" alt=""  className='h-50'  style={{marginTop: "-40%" , marginLeft: "10%"}}/>
        </div>      


        <div>
            <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/digital-key-2684403-2228069.png?f=webp&w=256" alt="" style={{transform: "rotate(180deg)", marginLeft: "60%" ,marginTop: "-30%"}} />
        </div>

<div className='w-40' style={{marginTop: "10%", marginLeft: "60%"}}>
<Link to="mainpath">
       <button className='text-center text-white text-2xl bg-indigo-700 rounded-xl p-2 h-12 hover:scale-110 hover:text-black hover:border-4 hover:border-dotted hover:border-black h-12'>Get started</button>
        </Link> 
</div>



        
       </> 
    )
}

export default Start
