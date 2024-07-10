import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { InputBox } from '../components'  
import info from '../hooks/customh'


function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState(0);    // creating thefunctionality for the app.
  const [to, setTo] = useState(0);
  const [converted, setconverted] = useState(0);

  const currencyinfo = info(from);

  const options = Object.keys(currencyinfo)

  const swap = ()=>{
    setTo(from)  // swap the currencies.
    setfrom(to)
    setconverted(amount)
    setamount(converted)   /// swap the values of the amount too.
  }

  const convertcurrency = ()=>{
    setconverted(amount * convertcurrency[to]) // convert currency is an object, in there we got key value pair, so the value would be the rate, now we will multiply our with for to get the converted amount.
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1191509798/photo/stairs-to-the-clouds-ladder-of-success-concept.jpg?s=2048x2048&w=is&k=20&c=U29isiCMH2c4426jyi8xWbwYcUDJJGcF9N8DCNS5-rA=')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        convertcurrency()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyoptions={options}
                            oncurrencychange={(currency) =>{
                              setamount(amount);
                            }}
                            selectcurrency={from}
                            onammountchange={(amount)=>{setamount(amount)}}
                            
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
                            oncurrencychange={(currency)=> setTo(currency)}
                            selectcurrency={to}
                            amountdisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUppercase()} to {to.toUppercase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
