import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MainBody() {
    const [name, setname] = useState('');
   
    return (
        <>
            <h1 className='text-2xl text-white font-sans'>Info Stage</h1>
            <div className="h-64 w-72 bg-white rounded-xl m-4" style={{ marginTop: "8%", marginLeft: "38%" }}>
                <h1 className='text-xl p-4'>Feed up</h1>
                <input
                    id='me'
                    className='rounded h-12 w-64 text-l border-4'
                    style={{ marginTop: "10%" }}
                    type="text"
                    value={name}
                    onChange={(e) => { setname(e.target.value) }}
                    placeholder='Enter your GitHub username:'
                />
                <Link to={`/Render/${name}`}>
                    <button
                        className='bg-pink-300 w-32 h-10 rounded-xl hover:scale-110 hover:text-gray-700 hover:border-black'
                        style={{ marginTop: "20%" }}
                    >
                        Go!
                    </button>
                </Link>
            </div>
        </>
    );
}


function check(){
    let input = document.getElementById("me")

    if(input.value == null){
        return(
            <>
            <div>
                fill the details
            </div>
            </>
        )
    }
    
}



export default MainBody;

export const myinfo = async ({ params }) => {
    const response = await fetch(`https://api.github.com/users/${params.username}`);
    return response.json();
};
