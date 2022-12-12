import React from "react";

const ResetBtn = () => {
    return (
        <div style={style.btnCont}>
            <button style={style.navBtn}>Reset</button>
        </div>
    );
};

export default ResetBtn;

const style = {
    btnCont: {
        display: "flex",
        flexDirection: "row",
        border: "1px solid red",
        width: "4rem",
        justifyContent: "center",
    },

    navBtn: {
        border: "1px solid black",
        borderRadius: ".1rem",
        backgroundColor: "#f9c6c0",
        color: "darkRed",
        fontWeight: "bold",
        padding: ".2rem",
    },
};
