import React from "react";
import { FaCheck } from "react-icons/fa";

const SubmitBtn = () => {
    return (
        <div style={style.btnCont}>
            <button style={style.navBtn}>
                <FaCheck />Enter
            </button>
        </div>
    );
};

export default SubmitBtn;

const style = {
    btnCont: {
        display: "flex",
        flexDirection: "row",
        border: "1px solid red",
        width: "2rem",
        justifyContent: "center",
    },

    navBtn: {
        border: "1px solid darkGreen",
        borderRadius: ".1rem",
        backgroundColor: "#91deb1",
        color: "darkGreen",
        padding: ".2rem",
    },
};
