import React from "react";
import imageLogo from "./NoobieJ-logo-1.png";

const Logo = (props) => {
    return <img src={imageLogo} alt={props.alt} style={style.logo} />;
};

export default Logo;


const style = {
    logo: {
        border: ".1rem solid white",
        height: "4rem",
        borderRadius: "15px",
        marginLeft: ".5rem",
        marginTop: ".4rem",
        // padding: ".5rem",
    },
};
