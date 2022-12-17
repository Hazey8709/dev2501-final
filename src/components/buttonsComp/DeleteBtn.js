import React from "react";
import { FaTrash } from "react-icons/fa";

const DeleteBtn = (props) => {
    return (
        <button onClick={props.onClick} style={style.delBtn}>
            <FaTrash />
        </button>
    );
};

export default DeleteBtn;

const style = {
    delBtn: {
        border: ".2rem outset black",
        borderRadius: ".3rem",
        margin: "0 auto",
        backgroundColor: "#f5b7b1",
        color: "red",
        fontWeight: "bold",
        cursor: "pointer",
    },
};
