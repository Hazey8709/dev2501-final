import React from "react";
import HomeImage from "../components/homeComp/HomeImage";
// import MainAvatar from "./MainAvatar";
import Icons from "../components/homeComp/Icons";

const Home = (props) => {
    return (
        <div style={style.mainCont}>
            <HomeImage />
            <h3 style={style.mainTitle}>Noobie J</h3>
            <p style={style.aboutPara}>
                Enjoy taking a look at my design. It is a little project for
                class at Full Sail. This project was created using React some
                JavaScript, CSS and HTML. Hope you like it, it is a work in
                progress..
            </p>
            <div style={style.iconsCont}>
                <Icons />
            </div>
        </div>
    );
};

export default Home;

const style = {
    mainCont: {
        // border: "1px solid red",
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
