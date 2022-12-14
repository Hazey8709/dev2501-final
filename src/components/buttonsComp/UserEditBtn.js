import React from "react";
import { FaUserEdit } from "react-icons/fa";

const UserEditBtn = () => {
    return (
        <div style={style.btnCont}>
            <button style={style.editBtn}>
                <FaUserEdit />
            </button>
        </div>
    );
};

export default UserEditBtn;

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
