import React from "react";
import HomeImage from "../components/homeComp/HomeImage";
// import MainAvatar from "./MainAvatar";
import Icons from "../components/homeComp/Icons";

const Home = (props) => {
    return (
        <div style={style.mainCont}>
            <HomeImage />
            <h3 style={style.mainTitle}>{props.homeUserTitle}</h3>
            <p style={style.aboutPara}>{props.aboutPara}</p>
            <div style={style.iconsCont}>
                <Icons />
            </div>
        </div>
    );
};

export default Home;

const style = {
    mainCont: {
        // border: "1px solid blue",
        height: "50rem",
        width: "100%",
        margin: "0 auto",
    },

    mainTitle: {
        textAlign: "center",
    },

    aboutPara: {
        textAlign: "center",
        padding: "1rem",
        cursor: "pointer",
    },

    iconsCont: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
};
