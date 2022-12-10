import React from "react";
import NavBtn from "../buttonsComp/NavBtn";

const Nav = () => {
    return (
        <nav style={style.navCont}>
            <NavBtn
                btn1Name='Profile'
                btn2Name='News Feed'
                btn3Name='Messages'
                btn4Name='Pictures'
            />
        </nav>
    );
};

export default Nav;

const style = {
    navCont: {
        display: "flex",
        position: "relative",
        flexDirection: "column",
        border: "1px solid white",
        borderTopLeftRadius: "1rem",
        borderBottomLeftRadius: "1rem",
        backgroundColor: "#0005",
        width: "10rem",
        height: "50rem",
    },
};
