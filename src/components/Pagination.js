import React from "react";
import { Fab } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const Pagination = (props) => {

    let start = 0;

    return (
        <div className="pagination-container">
            <Fab
                onClick={() => {
                    if (start >= 10) {
                        start -= 10;
                        props.searchHandler(start);
                    } else {
                        alert('This is the 1st page!')
                        props.searchHandler();
                    }
                }}
            >
                <NavigateBeforeIcon />
            </Fab>

            <Fab
                onClick={() => {
                    start += 10;
                    props.searchHandler(start);
                }}
            >
                <NavigateNextIcon />
            </Fab>
        </div>
    );
};

export default Pagination;
