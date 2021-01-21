import React, {Component, useState, useEffect} from "react";

function Quote() {

    const [quote, setQuote] = useState(null);
    const [newQuoteResponding, setNewQuote] = useState(false);

    useEffect(async () => {
        let apiKey = 'https://type.fit/api/quotes';
        const res = await fetch(apiKey);
        const data = await res.json();
        console.log(data[Math.floor(Math.random() * Math.floor(data.length))]);
        let quoteObj = data[Math.floor(Math.random() * Math.floor(data.length))]
        setQuote(data[Math.floor(Math.random() * Math.floor(data.length))])
        // console.log
    }, [newQuoteResponding]);

    const newQuote = () => {
        setNewQuote(!newQuoteResponding)
    };


    console.log('render quote')
    if (quote == null) {
        return null
    } else {
        return <div>
            <blockquote>{quote.text}</blockquote>
            <p>{quote.author}</p>
            <button onClick={newQuote}>Получить новую цитату</button>
        </div>
    }
}

export default Quote