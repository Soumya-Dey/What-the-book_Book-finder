import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import Header from "./Header";
import ResultItem from "./ResultItem";
import Pagination from "./Pagination";
import Loading from "./Loading";
import Quote from "./Quote";

// TODO: REPLACE '<YOUR GOOGLE BOOKS API KEY>' WITH YOUR ACTUAL KEY

const App = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [searchRes, setSearchRes] = useState([]);
    const [showRes, setShowRes] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [searchRes]);

    const searchAllBooks = (startIndex = 0) => {
        fetch(
            `https://www.googleapis.com/books/v1/volumes?startIndex=${startIndex}&q=${title}+inauthor:${author}&key=<YOUR GOOGLE BOOKS API KEY>`
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    setSearchRes(result.items);
                    setLoading(false);
                },
                (error) => console.log(error)
            );
    };

    return (
        <div className="container">
            <div className="hero-container">
                <Header />

                <div className="search-area">
                    <p className="search-text">
                        Search for the Book Title or Book Author
                    </p>

                    <form
                        className="search-form"
                        noValidate
                        autoComplete="off"
                        onSubmit={(e) => {
                            e.preventDefault();
                            setSearchRes([]);
                            setLoading(true);
                            searchAllBooks();
                            setShowRes(true);
                        }}
                    >
                        <TextField
                            id="outlined-basic"
                            label="Title"
                            variant="outlined"
                            size="small"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Author"
                            variant="outlined"
                            size="small"
                            onChange={(e) => setAuthor(e.target.value)}
                            value={author}
                        />

                        <button type="submit">
                            <p>Search</p>
                            <SearchIcon />
                        </button>
                    </form>
                </div>
            </div>

            {showRes ? (
                <div className="results-container">
                    {loading ? (
                        <Loading />
                    ) : (
                        searchRes.map((volume) => {
                            return (
                                <ResultItem
                                    key={volume.id}
                                    info={volume.volumeInfo}
                                />
                            );
                        })
                    )}

                    <Pagination searchHandler={searchAllBooks} />
                </div>
            ) : (
                <Quote />
            )}

            <p className="copyright">
                &copy; {new Date().getFullYear()} | Made with 💛 by&nbsp;
                <a
                    href="https://github.com/Soumya-Dey"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Soumya
                </a>
            </p>
        </div>
    );
};

export default App;
