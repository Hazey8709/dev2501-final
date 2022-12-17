import React from "react";
import { FaEdit } from "react-icons/fa";

const EditBtn = (props) => {
    return (
        <button style={style.editBtn} onClick={props.onClick}>
            <FaEdit />
        </button>
    );
};

export default EditBtn;

const style = {
    editBtn: {
        border: ".2rem outset black",
        borderRadius: ".3rem",
        margin: "0 auto",
        backgroundColor: "#c8face",
        color: "darkGreen",
        fontWeight: "bold",
        cursor: "pointer",
    },
};

