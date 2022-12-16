import React from "react";
import { FaEdit } from "react-icons/fa";

const EditBtn = (props) => {
    return (
        <div style={style.btnCont} onClick={props.onClick}>
            <button style={style.editBtn}>
                <FaEdit />
            </button>
        </div>
    );
};

export default EditBtn;

const style = {
    btnCont: {
        display: "flex",
        flexDirection: "row",
        border: "1px solid red",
        width: "2rem",
        justifyContent: "center",
    },

    editBtn: {
        border: "1px solid darkGreen",
        borderRadius: ".1rem",
        backgroundColor: "#c8face",
        color: "darkGreen",
        padding: ".2rem",
    },
};
