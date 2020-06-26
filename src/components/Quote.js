import React, { useState, useEffect } from "react";

const Quote = () => {
    const [quote, setQuote] = useState({
        content: "",
        author: "",
    });

    useEffect(() => {
        fetch("https://api.quotable.io/random?tags=education|wisdom")
            .then((res) => res.json())
            .then(
                (result) => {
                    setQuote({
                        content: result.content,
                        author: result.author,
                    });
                },
                (error) => console.log(error)
            );
    }, []);

    return (
        <div className="quote-container">
            <span>"</span>
            <h1 className="quote-text">{quote.content}</h1>
            <p className="quote-author">&#9473; &nbsp;{quote.author}</p>
        </div>
    );
};

export default Quote;
