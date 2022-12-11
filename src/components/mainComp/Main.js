import React from "react";
import MainImage from "./MainImage";
// import MainAvatar from "./MainAvatar";
import Icons from "./Icons";

const MainAd = (props) => {
    return (
        <div style={style.adsCont}>
            <MainImage />
            <h3 style={style.mainAdTitle}>Noobie J</h3>
            <p style={style.aboutPara}>
                Enjoy taking a look at my design. It is a little project for
                class at Full Sail. This project was created using React some
                JavaScript, CSS and HTML. Hope you like it, it is a work in
                progress..
            </p>
            <div>
                <Icons />
            </div>
            {/* <MainAdImage /> */}
        </div>
    );
};

export default MainAd;

const style = {
    adsCont: {
        // border: "1px solid red",
        height: "50rem",
        width: "100%",
        margin: "0 auto",
    },

    mainAdTitle: {
        textAlign: "center",
    },

    aboutPara: {
        textAlign: "center",
        padding: "1rem",
    },
};
