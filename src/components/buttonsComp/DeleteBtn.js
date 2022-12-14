import React from "react";
import { FaTrash } from "react-icons/fa";

const DeleteBtn = () => {
    return (
        <div style={style.btnCont}>
            <button style={style.delBtn}>
                <FaTrash />
            </button>
        </div>
    );
};

export default DeleteBtn;

const style = {
    btnCont: {
        display: "flex",
        flexDirection: "row",
        border: "1px solid red",
        width: "2rem",
        justifyContent: "center",
    },

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
