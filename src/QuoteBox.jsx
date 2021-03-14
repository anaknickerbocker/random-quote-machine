import React from 'react';
import axios from 'axios';

const getRandomInt = (max) => {
  const min = 0;
  return Math.floor(Math.random() * (max - min) + min);
};

const QuoteBox = () => {
  const [quotes, setQuotes] = React.useState([]);
  const [quote, setQuote] = React.useState('Ana is incredible');
  const [author, setAuthor] = React.useState(`everyone who's met her`);

  const setupQuotes = async () => {
    const response = await axios.get('https://type.fit/api/quotes');
    setQuotes(response.data);
  };

  const getNextQuote = React.useCallback(() => {
    if (quotes.length) {
      const nextQuote = quotes[getRandomInt(quotes.length - 1)];
      setQuote(nextQuote.text);
      setAuthor(nextQuote.author);
    }
  }, [quotes]);

  React.useEffect(() => {
    getNextQuote();
  }, [getNextQuote, quotes]);

  React.useEffect(() => {
    setupQuotes();
  }, []);

  return (
    <div id='quote-box' className='box-centered'>
      <div id='text'>Quote: {quote}</div>
      <div id='author'>Author: {author}</div>
      <button id='get-quote' onClick={getNextQuote}>
        Get a new quote
      </button>
    </div>
  );
};

export default QuoteBox;
