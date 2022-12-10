import React from "react";

const NavBtn = (props) => {
    return (
        <div style={style.btnCont}>
            <button style={style.navBtn}>{props.btn1Name}</button>
            <button style={style.navBtn}>{props.btn2Name}</button>
            <button style={style.navBtn}>{props.btn3Name}</button>
            <button style={style.navBtn}>{props.btn4Name}</button>
        </div>
    );
};

export default NavBtn;

const style = {
    btnCont: {
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
    },

    navBtn: {
        border: "1px outset white",
        borderRadius: ".2rem",
        backgroundColor: "#0005",
        color: "white",
        fontWeight: "bold",
        width: "5rem",
        margin: "0 auto",
        marginBottom: "5rem",
        marginTop: "5rem",
        paddingTop: ".5rem",
        paddingBottom: ".5rem",
        cursor: "pointer",
    },
};
