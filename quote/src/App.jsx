import { useState, useEffect } from 'react';
import useFetchQuote from '../hooks/customhook';
import './App.css';

function App() {
  const [quote, setQuote] = useState("Loading ...");
  const [color, setColor] = useState('white');
  const [count, setCount] = useState(0);

  const fetchQuote = useFetchQuote();

  useEffect(() => {
    if (fetchQuote) {
      setQuote(fetchQuote);
    }
  }, [fetchQuote]);

  const increase = () => {
    setCount(count + 1);
  };

  const getData = () => {
    setQuote("Loading ...");
    setTimeout(() => {
      setQuote(fetchQuote);
    }, 1000);
  };

  return (
    <div className='' style={{ marginBottom: "30%" }}>
      <div className='w-96 h-64 border-4 border-blue-200 rounded-xl text-black' style={{ backgroundColor: "white" }}>
        <div className='text-xl'>Quotes to make your day!</div>
        <br />
        <hr />
        <div className='m-10 text-2xl rounded-xl cursor-pointer bg-yellow-100 text-black'>" {quote} "</div>
        <hr />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2%" }}>
        <div className='flex justify-center rounded-xl' onClick={increase} style={{ backgroundColor: color }}>
          <img src="/images/heart.png" alt="" className='h-10 m-2' onClick={() => setColor("pink")} />
        </div>
        <label className='flex m-2 text-xl' style={{ marginRight: "60%" }}>{count}</label>
        <div className=''>
          <button className='flex justify-center duration-200 border-2 border-black hover:scale-105' style={{ backgroundColor: "grey" }} onClick={getData}>
            <img src="/images/next.png" alt="" className='h-7' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
