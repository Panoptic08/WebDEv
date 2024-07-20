import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Content() {
    const data = useLoaderData();
    let rate = "keep moving ✨";
    if(data.followers<10){
        rate = "Least Active person 😠"
    }
    let bio = "null";   
    if(data.bio != null){
        bio = data.bio
    }
    return (
        <>
            <div >
                <h1 className='text-white text-2xl'>Welcome to the Content Page!</h1>
                {data!=null ? (
                    <div className='text-2xl text-black bg-blue-300 h-auto w-96 p-4 mt-20 ml-96 rounded-xl'>
                        <div className='bg-black rounded w-auto'>
                        <p><img src={data.avatar_url} alt="" className='h-48 w-48  ml-20'/></p>
                        </div>
                     
                        <p className='mt-4'>Username: {data.login}</p>
                        <p>bio: {bio}</p>
                        {/* <p>Name: {data.name}</p> */}
                        <p>Followers: {data.followers}</p>
                        <p>Following: {data.following}</p>
                        <p>created: {data.created_at}</p>
                        <p>repos: {data.public_repos}</p>
                        <p>Rating: {rate}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
                <button className='text-black text-center mt-12 bg-green-300 rounded  h-12 w-20 hover:scale-110' style={{marginRight: "3%"}}> 
                    <img src="https://static-00.iconduck.com/assets.00/share-emoji-512x512-j2qmf7um.png" alt="" className='h-10 ml-4'/>
                    
                     </button>
            </div>
        </>
    );
}

export default Content;

export const myinfo = async ({ params }) => {
    if(params.username){
        const response = await fetch(`https://api.github.com/users/${params.username}`);
        return response.json();
    } 
};
