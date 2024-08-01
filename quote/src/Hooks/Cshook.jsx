import React, { useState, useEffect } from 'react';

function Cshook() {
    const [quote, setQuote] = useState("loading...");

    useEffect(() => {
        fetch("https://api.quotable.io/quotes/random?tags=history,civil-rights")
            .then((response) => response.json())
            .then((data) => {
                const fetchedQuote = data.content;
                setQuote(fetchedQuote);
            })
            .catch((error) => {
                console.error("Error fetching quote:", error);
                setQuote("Failed to fetch quote");
            });
    }, []);

    return (
        <div className='w-96 h-64 border-4 border-blue-200 rounded-xl text-black' style={{ backgroundColor: "white" }}>
            <div className='text-xl p-4'>Quotes to make your day!</div>
            <br />
            <hr />
            <div className='m-10 text-2xl rounded-xl cursor-pointer bg-yellow-100 text-black'>{quote}</div>
            <hr />
        </div>
    );
}

export default Cshook;
