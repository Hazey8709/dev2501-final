import React from "react";
//import avatarImage from "../images/logo.png";

const Avatar = (props) => {
    return <img src={props.avatarImage} alt={props.alt} style={style.avatar} />;
};

export default Avatar;

const style = {
    avatar: {
        display: "flex",
        marginTop: "1.5rem",
        border: ".1rem solid white",
        height: "4rem",
        width: "11rem",
        borderRadius: "10px",
        marginRight: "1rem",
    },
};
