import React from 'react';

const QuoteBox = ({ author }) => {
    const [quote, setQuote] = React.useState('');
    const getQuote = async () => {
        fetch('https://www.affirmations.dev/').then((res) => res.json()).then((data) => setQuote(data.affirmation));
        console.log(quote)
        setQuote(quote);
    }

    React.useEffect(() => {
        getQuote();
    });

    return (
        <div id="quote-box" className="box-centered">
            <div id="text">{quote}</div>
            <div id="author">{author}</div>
            <button id="get-quote" onClick={getQuote}>Get a new quote</button>
        </div>
    );
};

export default QuoteBox;