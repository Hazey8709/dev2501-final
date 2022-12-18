import React from "react";
import { FaEdit } from "react-icons/fa";

const EditBtn = (props) => {
    return (
        <button onClick={props.onClick} style={style.editBtn}>
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
