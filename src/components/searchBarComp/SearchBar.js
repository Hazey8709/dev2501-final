import React from "react";

const SearchBar = (props) => {
    return (
        <div style={style.searchCont}>
            <button style={style.searchBtn}>Submit</button>
            <input
                style={style.input}
                type='text'
                placeholder='Search'
                required
            ></input>
        </div>
    );
};

export default SearchBar;

const style = {
    searchCont: {
        // border: "1px solid red",
        margin: "0 auto",
        marginTop: "5rem",
        padding: "1rem",
    },

    searchBtn: {
        border: ".2rem outset black",
        borderRadius: ".2rem",
        marginRight: ".3rem",
        fontWeight: "bold",
        color: "green",
        cursor: "pointer",
    },

    input: {
        border: ".2rem inset black",
        borderRadius: ".2rem",
        width: "13rem",
        backgroundColor: "antiqueWhite",
    },
};
