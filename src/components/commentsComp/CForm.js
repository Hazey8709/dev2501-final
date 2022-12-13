import React from "react";


const CForm = (props) => {
    return (
        <form style={style.formCont}>

            <input
                style={style.inputName}
                type='text'
                placeholder='Joe Smith:'
                required
            />
            <input
                type='text'
                placeholder='Status: '
                required
                style={style.inputTitle}
            />
            <textarea
                type='text'
                placeholder='Details:'
                required
                style={style.comment}
            />
            <button type='submit' style={style.submitBtn}>
                Submit
            </button>
            <button type='reset' style={style.resetBtn}>
                Reset
            </button>
        </form>
    );
};

export default CForm;

const style = {
    formCont: {
        position: "absolute",
        border: "1px solid white",
        borderRadius: ".4rem",
        backgroundColor: "#0005",
        margin: "0 auto",
        marginTop: "4.7rem",
        marginLeft: "4.3rem",

        padding: ".5rem",
        width: "15.7rem",
        height: "18.5rem",
    },

    inputName: {
        border: ".2rem inset black",
        borderRadius: ".2rem",
        width: "7.2rem",
    },

    inputTitle: {
        border: ".2rem inset black",
        borderRadius: ".2rem",
        flexDirection: "row",
        width: "7.2rem",
    },

    comment: {
        border: ".2rem inset black",
        borderRadius: ".2rem",
        position: "relative",
        width: "15rem",
        height: "11rem",
    },

    submitBtn: {
        border: ".2rem outset black",
        borderRadius: ".2rem",
        marginRight: "1.4rem",
        marginTop: ".5rem",
        fontWeight: "bold",
        width: "7rem",
        backgroundColor: "#b5f8b1",
        color: "darkGreen",
        cursor: "pointer",
    },

    resetBtn: {
        border: ".2rem outset black",
        borderRadius: ".2rem",
        fontWeight: "bold",
        width: "7rem",
        backgroundColor: "#f5b7b1",
        color: "darkRed",
        cursor: "pointer",
    },
};
