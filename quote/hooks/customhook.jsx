import { useState, useEffect } from 'react';

function useFetchQuote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch('https://zenquotes.io/api/random')
      .then((response) => response.json())
      .then((data) => {
        const quoteData = data[0];
        const formattedQuote = `${quoteData.q} - ${quoteData.a}`;
        setQuote(formattedQuote);
      });
  }, []);

  return quote;
}

export default useFetchQuote;
