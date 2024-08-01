import React, { useState } from 'react';
import './App.css';
import Cshook from './Hooks/Cshook';  

function App() {
  const [color, setColor] = useState('white');
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className='' style={{ marginBottom: "30%" }}>
      <Cshook />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2%" }}>
        <div className='flex justify-center rounded-xl' onClick={increase} style={{ backgroundColor: color }}>
          <img src="/images/heart.png" alt="Heart" className='h-10 m-2' onClick={() => setColor("pink")} />
        </div>
        <label className='flex m-2 text-xl' style={{ marginRight: "60%" }}>{count}</label>
        <div className=''>
          <button className='flex justify-center duration-200 border-2 border-black hover:scale-105' style={{ backgroundColor: "grey" }}>
            <img src="/images/next.png" alt="Next" className='h-7' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
