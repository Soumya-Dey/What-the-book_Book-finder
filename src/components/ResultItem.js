import React from "react";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const ResultItem = (props) => {
    let authorStr = "";

    if (props.info.authors) {
        if (props.info.authors.length > 1) {
            props.info.authors.forEach((author, i) => {
                if (i !== props.info.authors.length - 1)
                    authorStr += author + ", ";
                else authorStr += author;
            });
        } else {
            authorStr = props.info.authors;
        }
    }

    return (
        <div className="card">
            <img
                className="card-thumbnail"
                src={
                    props.info.imageLinks
                        ? props.info.imageLinks.thumbnail
                        : "./images/not-available.jpg"
                }
                alt={props.info.title}
            ></img>

            <div className="card-details">
                <a
                    className="book-title"
                    href={props.info.infoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.info.title.length > 42
                        ? props.info.title.substring(0, 42) + "..."
                        : props.info.title}
                </a>
                <p className="book-author">by {authorStr}</p>

                <p className="rating">
                    {props.info.averageRating
                        ? props.info.averageRating + " / 5"
                        : "No ratings"}
                </p>

                <p className="publisher">
                    {props.info.publisher
                        ? props.info.publisher
                        : "Unknown publisher"}
                </p>
                <p className="pub-date">
                    {props.info.publishedDate
                        ? props.info.publishedDate
                        : "Publish date not available"}
                </p>

                <a
                    className="preview-a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={props.info.previewLink}
                >
                    <button className="preview-link">
                        Preview <OpenInNewIcon />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default ResultItem;
