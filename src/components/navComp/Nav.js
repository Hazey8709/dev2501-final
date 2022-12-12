import React from "react";
import { Link } from "react-router-dom";
//import NavBtn from "../buttonsComp/NavBtn";

const Nav = () => {
    return (
        <nav style={style.navCont}>
            <Link to='/dashBoard' style={style.navLink}>
                DashBoard
            </Link>
            <Link to='/newsFeed' style={style.navLink}>
                News Feed
            </Link>
            <Link to='/comments' style={style.navLink}>
                Comments
            </Link>
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
        flexDirection: "column",
        position: "relative",
        border: "1px solid white",
        borderTopLeftRadius: "1rem",
        borderBottomLeftRadius: "1rem",
        backgroundColor: "#0005",
        width: "10rem",
        height: "50rem",
    },

    // navLink: {
    //     border: "1px solid black",
    // },

    navLink: {
        border: "1px outset white",
        borderRadius: ".2rem",
        backgroundColor: "#0005",
        color: "white",
        fontWeight: "bold",
        width: "6rem",
        margin: "0 auto",
        marginBottom: "5rem",
        marginTop: "5rem",
        paddingTop: ".5rem",
        paddingBottom: ".5rem",
        cursor: "pointer",
        textAlign: "center",
        textDecoration: "none",
    },
};
