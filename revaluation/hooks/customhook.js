import { useState, useEffect } from 'react';

function useGetValue(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json[currency]);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [currency]);

  return data;
}

export default useGetValue;
