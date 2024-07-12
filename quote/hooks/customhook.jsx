import { useState, useEffect } from 'react';

const useCustomQuote = () => {
  const[data, setdata] = useState({})
  useEffect(()=>{
    fetch('https://zenquotes.io/api/random').then( response=>response.json() ).then(data=>setdata(data[0]))

  },[])
  return data;
};

export default useCustomQuote;
