import React from "react";
import { Link } from "react-router-dom";
//import NavBtn from "../buttonsComp/NavBtn";

const Nav = () => {
    return (
        <nav style={style.navCont}>
            <Link to='/dashBoard'>DashBoard</Link>
            <Link to='/dashBoard'>News Feed</Link>
            <Link to='/dashBoard'>Comments</Link>
            <Link to='/main' style={style.navLink}>
                Home
            </Link>
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

    navLink: {
        border: "1px solid black",
    },
};
