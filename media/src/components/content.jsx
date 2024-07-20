import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Content() {
    const data = useLoaderData();
    const rate = data.followers < 10 ? "Least Active person 😠" : "keep moving ✨";
    const bio = data.bio || "null";

    return (
        <div className="flex flex-col items-center mt-5">
            {data ? (
                <div className="text-xl text-black bg-white dark:text-white dark:bg-gray-800 h-auto w-96 p-6 rounded-xl shadow-md">
                    <div className="flex justify-center mb-4">
                        <img src={data.avatar_url} alt={`${data.login}'s avatar`} className="h-48 w-48 rounded-full"/>
                    </div>
                    <p className="mb-2"><strong>Username:</strong> {data.login}</p>
                    <p className="mb-2"><strong>Bio:</strong> {bio}</p>
                    <p className="mb-2"><strong>Followers:</strong> {data.followers}</p>
                    <p className="mb-2"><strong>Following:</strong> {data.following}</p>
                    <p className="mb-2"><strong>Created:</strong> {new Date(data.created_at).toLocaleDateString()}</p>
                    <p className="mb-2"><strong>Repos:</strong> {data.public_repos}</p>
                    <p className="mb-2"><strong>Rating:</strong> {rate}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <button className="text-black mt-6 bg-green-300 rounded h-12 w-20 hover:scale-110 flex items-center justify-center dark:text-white dark:bg-green-700">
                <img src="https://static-00.iconduck.com/assets.00/share-emoji-512x512-j2qmf7um.png" alt="Share" className="h-8 mr-2"/>
                Share
            </button>
        </div>
    );
}

export default Content;
