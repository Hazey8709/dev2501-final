import React from "react";
// import MainAdImage from "./MainAdImage";
// import MainAvatar from "./MainAvatar";

const MainAd = (props) => {
    return (
        <div style={style.adsCont}>
            {/* <MainAvatar /> */}
            <h3 style={style.mainAdTitle}>{props.mainAdTitle}</h3>
            <p style={style.aboutPara}>{props.aboutPara}</p>
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

    // imageCont: {},
};
