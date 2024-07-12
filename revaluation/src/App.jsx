// import React, { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import InputBox from '../components/InputBox';
// import useGetValue from '../hooks/customhook';

// function App() {
//   const [amount, setAmount] = useState(0);
//   const [from, setFrom] = useState('inr');
//   const [to, setTo] = useState('');
//   const [converted, setConverted] = useState(0);

//   const currencies = useGetValue(from); // Fetch currencies

//   const options = currencies ? Object.keys(currencies) : [];

//   const swap = () => {
//     setTo(from);
//     setFrom(to);
//     setAmount(converted);
//     setConverted(amount);
//   };

//   const convert = () => {
//     if (currencies && currencies[to]) {
//       setConverted(amount * currencies[to]);
//     }
//   };

//   return (
//     <div
//       className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//       style={{
//         backgroundImage: `url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30484.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719187200&semt=ais_user')`,
//       }}
//     >
//       <div className="w-full">
//         <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               convert();
//             }}
//           >
//             <div className="w-full mb-1">
//               <InputBox
//                 label="From"
//                 amount={amount}
//                 amountchange={setAmount}
//                 currencyoptions={options}
//                 currencychange={setFrom}
//                 selectcurrency={from}
//               />
//             </div>
//             <div className="relative w-full h-0.5">
//               <button
//                 type="button"
//                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                 onClick={swap}
//               >
//                 swap
//               </button>
//             </div>
//             <div className="w-full mt-1 mb-4">
//               <InputBox
//                 label="To"
//                 amount={converted}
//                 amountchange={setConverted}
//                 currencyoptions={options}
//                 currencychange={setTo}
//                 selectcurrency={to}
//               />
//             </div>
//             <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//               Convert {from.toUpperCase()} to {to.toUpperCase()}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { InputBox } from '../components';
import useGetValue from '../hooks/customhook';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('inr');
  const [to, setTo] = useState('');
  const [converted, setConverted] = useState(0);

  const currencies = useGetValue(from); // Fetch currencies

  const options = currencies ? Object.keys(currencies) : [];

  const swap = () => {
    setTo(from);
    setFrom(to);
    setAmount(converted);
    setConverted(amount);
  };  

  const convert = () => {
    if (currencies && currencies[to]) {
      setConverted(amount * currencies[to]);
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30484.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719187200&semt=ais_user')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyoptions={options}
                currencychange={(e) => setAmount(e.target.value)}
                selectcurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={converted}
                currencyoptions={options}
                currencychange={(e) => setTo(e.target.value)}
                selectcurrency={to}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
