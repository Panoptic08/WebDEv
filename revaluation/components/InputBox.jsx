import React from 'react';

function InputBox({
  label,
  amount,
  amountchange,
  currencychange,
  amountdisable = false,
  currencydisable = false,
  currencyoptions = [],
  selectcurrency = 'inr',
  className = '',
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountdisable} // add a feature to disable input
          onChange={(e) => amountchange && amountchange(Number(e.target.value))} // on every HTML change an event would be fired and the amount will be changed with respect to it being a number
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectcurrency}
          onChange={(e) => currencychange && currencychange(e.target.value)}
          disabled={currencydisable} // add a feature to disable select
        >
          {currencyoptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
