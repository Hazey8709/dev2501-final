import React from "react";
import Ad1 from "./airJordanAdd.jpg";
import Ad2 from "./saleAdd.png";
import Ad3 from "./toyShopAdd.webp";

const Ads = (props) => {
    return (
        <div style={style.adsCont}>
            <div style={style.adCont}>
                <p style={style.adTitle}>{props.ad1Title}</p>
                <img src={Ad1} style={style.ad1} alt={props.alt}></img>
            </div>
            <div style={style.adCont}>
                <p style={style.adTitle}>{props.ad2Title}</p>
                <img src={Ad2} style={style.ad2} alt={props.alt}></img>
            </div>
            <div style={style.adCont}>
                <p style={style.adTitle}>{props.ad3Title}</p>
                <img src={Ad3} style={style.ad3} alt={props.alt}></img>
            </div>
        </div>
    );
};

export default Ads;

const style = {
    adsCont: {
        display: "flex",
        flexDirection: "column",
        // position: "relative",
        border: "1px solid white",
        borderTopRightRadius: "1rem",
        borderBottomRightRadius: "1rem",
        width: "13rem",
        height: "50rem",
        // padding: ".3rem",
        backgroundColor: "#0005",
    },

    adCont: {
        // border: "1px solid white",
        borderRadius: "5px",
        // backgroundColor: "#bbb9b9",
        margin: "0 auto",
        marginTop: "5rem",
        textAlign: "center",
        width: "8rem",
        // height: "12.3rem",
    },

    // adTitle: {
    //     fontWeight: "bold",
    // },

    ad1: {
        borderRadius: "1rem",
        height: "10rem",
        width: "8rem",
    },

    ad2: {
        borderRadius: "1rem",
        height: "11rem",
        width: "8rem",
    },

    ad3: {
        borderRadius: "1rem",
        height: "9rem",
        width: "8rem",
    },
};
