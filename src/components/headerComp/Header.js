import React from "react";
import Avatar from "./Avatar";
import Logo from "./Logo";
import SearchBar from "../searchBarComp/SearchBar";
import avatarImage from "./logo.png";

const Header = (props) => {
    return (
        <header style={style.headerCont}>
            <div style={style.logoCont}>
                <h3 style={style.logoTitle}>{props.logoTitle}</h3>
                <div style={style.logo}>
                    <Logo />
                </div>
            </div>
            <SearchBar />
            <Avatar avatarImage={avatarImage} />
        </header>
    );
};

export default Header;

const style = {
    headerCont: {
        display: "flex",
        border: "1px solid white",
        borderBottom: "3px solid white",
        borderBottomRightRadius: "1rem",
        borderBottomLeftRadius: "1rem",
        backgroundColor: "#0005",
        height: "8rem",
    },

    logoCont: {
        display: "flex",
        border: "1px solid white",
        borderRadius: ".2rem",
        backgroundColor: "#0005",
        flexDirection: "row",
        marginTop: "1rem",
        marginLeft: ".5rem",
        width: "11rem",
        height: "5rem",
    },

    logoTitle: {
        marginTop: "1.6rem",
        marginLeft: ".5rem",
        marginRight: ".5rem",
        textAlign: "center",
        justifyContent: "center",
        color: "white",
    },
};
