import React from "react";
import { FaCheck } from "react-icons/fa";

const SubmitBtn = () => {
    return (
        <button type='submit' value='submit' style={style.navBtn}>
            <FaCheck />
        </button>
    );
};

export default SubmitBtn;

const style = {
    navBtn: {
        border: "1px solid white",
        borderRadius: ".1rem",
        backgroundColor: "#91deb1",
        margin: "0 auto",
        marginTop: "2rem",
        width: "10rem",
        color: "darkGreen",
        padding: ".2rem",
    },
};
