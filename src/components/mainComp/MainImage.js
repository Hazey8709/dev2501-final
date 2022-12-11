import React from "react";
import mainImage from "./logo.png";

const MainImage = (props) => {
    return <img src={mainImage} alt={props.alt} style={style.avatar} />;
};

export default MainImage;

const style = {
    avatar: {
        display: "flex",
        margin: "0 auto",
        marginTop: "5rem",
        height: "10rem",
        width: "25rem",
        borderRadius: "10px",
    },
};
