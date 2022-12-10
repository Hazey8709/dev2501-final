import React from "react";
import { FaGithub, FaFacebook, FaYoutube, FaCircle } from "react-icons/fa";
import { FaAccusoft, FaAirbnb, FaAmazonPay, FaAmazon } from "react-icons/fa";
import { FaAngellist, FaAndroid } from "react-icons/fa";

const Footer = (props) => {
    return (
        <footer style={style.footerCont}>
            <div style={style.iconCont}>
                <a style={style.link} href='https://github.com/Hazey8709'>
                    <FaGithub />
                </a>
                <a
                    style={style.link}
                    href='https://www.facebook.com/people/Noobie-Js/100077721983756/'
                >
                    <FaFacebook />
                </a>
            </div>
            <div style={style.iconCont}>
                <a
                    style={style.link}
                    href='https://www.youtube.com/channel/UC7fWlqdyFBA1FwEVhtDMcuA'
                >
                    <FaYoutube />
                </a>
                <a
                    style={style.link}
                    href='https://www.bitdegree.org/user/Hazey87/profile'
                >
                    <FaCircle />
                </a>
            </div>
            <div style={style.iconCont}>
                <a
                    style={style.link}
                    href='https://www.youtube.com/channel/UC7fWlqdyFBA1FwEVhtDMcuA'
                >
                    <FaAccusoft />
                </a>
                <a
                    style={style.link}
                    href='https://www.bitdegree.org/user/Hazey87/profile'
                >
                    <FaAirbnb />
                </a>
            </div>
            <div style={style.iconCont}>
                <a
                    style={style.link}
                    href='https://www.youtube.com/channel/UC7fWlqdyFBA1FwEVhtDMcuA'
                >
                    <FaAmazonPay />
                </a>
                <a
                    style={style.link}
                    href='https://www.bitdegree.org/user/Hazey87/profile'
                >
                    <FaAmazon />
                </a>
            </div>
            <div style={style.iconCont}>
                <a
                    style={style.link}
                    href='https://www.youtube.com/channel/UC7fWlqdyFBA1FwEVhtDMcuA'
                >
                    <FaAngellist />
                </a>
                <a style={style.link} href='https://www.android.com'>
                    <FaAndroid />
                </a>
            </div>
        </footer>
    );
};

export default Footer;

const style = {
    footerCont: {
        display: "flex",
        flexDirection: "row",
        border: "1px solid white",
        borderRadius: "1rem",
        backgroundColor: "#0005",
        marginTop: ".3rem",
        width: "100%",
        height: "9rem",
    },

    iconCont: {
        // border: "1px solid white",
        backgroundColor: "#bbb9b9",
        borderRadius: ".5rem",
        textAlign: "center",
        margin: "0 auto",
        marginTop: "2rem",
        padding: "1rem",
        // width: "90%",
        height: "1rem",
    },

    link: {
        padding: "1rem",
        fontSize: "1.3rem",
        pointer: "cursor",
    },
};
