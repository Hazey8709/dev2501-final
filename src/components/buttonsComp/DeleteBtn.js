import React from "react";
import { FaTrash } from "react-icons/fa";

const DeleteBtn = (props) => {
    return (
<<<<<<< HEAD
        <button onClick={props.onClick} style={style.delBtn}>
=======
        <button style={style.delBtn} onClick={props.onClick}>
>>>>>>> 5e39e5ee708790ea771de02477c5b797f0b5725e
            <FaTrash />
        </button>
    );
};

export default DeleteBtn;

const style = {
    // btnCont: {
    //     display: "flex",
    //     flexDirection: "row",
    //     border: "1px solid red",
    //     width: "2rem",
    //     justifyContent: "center",
    // },

    delBtn: {
        display: "flex",
        flexDirection: "row",
        border: "2px outset black",
        borderRadius: ".3rem",
        margin: "0 auto",
        marginTop: ".3rem",
        backgroundColor: "#f5b7b1",
        color: "red",
        fontWeight: "bold",
        cursor: "pointer",
    },
};
