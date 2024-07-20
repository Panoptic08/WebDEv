import React from 'react';
import { Link } from 'react-router-dom';

function start() {
    return (
        <div className='flex flex-col items-center p-4'>
            <h1 className='text-4xl text-blue-200 font-bold mb-8'>Personalize Your Socials</h1>
            
            <div className='flex flex-wrap justify-center gap-6 mb-8'>
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-linked-17-437632.png?f=webp&w=256" alt="LinkedIn" className='h-16' />
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/horizontal-line-9675512-7846589.png?f=webp&w=256" alt="Separator" className='h-16' />
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-github-159-721954.png?f=webp&w=256" alt="GitHub" className='h-16' />
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/horizontal-line-9675512-7846589.png?f=webp&w=256" alt="Separator" className='h-16' />
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-youtube-268-721990.png?f=webp&w=256" alt="YouTube" className='h-16' />
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/horizontal-line-9675512-7846589.png?f=webp&w=256" alt="Separator" className='h-16' />
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-instagram-1868978-1583142.png?f=webp&w=256" alt="Instagram" className='h-16' />
            </div>
            
            <div className='flex '>
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/social-media-3022554-2512980.png?f=webp&w=256" alt="Social Media" className='h-20 ml-96 ' />
                
           
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-meta-6823273-5582655.png?f=webp&w=256" alt="Meta" className='absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 mt-0'style={{marginTop: "-5%"}} />
              
           
            </div>
            
            <div className='mt-0'>
                <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzdxdGs4Ync4aHB1bGZoZmk0Y3RmOXVlNzliMzB3YzgwcmN5d2VlaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6fJgxWzRPz3nxtu0/giphy.webp" alt="Animated GIF" className='h-64' />
            </div>
            
            <div className=''>
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/digital-key-2684403-2228069.png?f=webp&w=256" alt="Digital Key" className='h-20 transform rotate-180 ' />
            </div>
            
            <div className='mb-8'>
                <Link to="mainpath">
                    <button className='text-center text-white text-2xl bg-indigo-700 rounded-xl p-4 hover:scale-105 hover:bg-indigo-800 transition-all duration-300'>
                        Get Started
                    </button>
                </Link> 
            </div>
        </div>
    );
}

export default start;
