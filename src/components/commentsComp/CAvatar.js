import React from "react";
import CAvatarImage from "./NoobieJ-logo-1.png";

const CAvatar = (props) => {
    return <img src={CAvatarImage} alt={props.alt} style={style.avatar} />;
};

export default CAvatar;

const style = {
    avatar: {
        border: "1px solid black",
        borderRadius: ".5rem",
        margin: "0 auto",
        marginLeft: "3rem",
        width: "10rem",
        height: "3rem",
    },
};
