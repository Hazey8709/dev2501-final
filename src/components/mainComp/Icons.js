import React from "react";
import { FaCog, FaUserEdit } from "react-icons/fa";

const Icons = (props) => {
    return (
        <section style={style.Cont}>
            <div style={style.iconCont}>
                <a style={style.settingsLink} href='localhost:3000/main'>
                    <FaCog />
                </a>
                <a style={style.editProfileLink} href='localhost:3000/main'>
                    <FaUserEdit />
                </a>
            </div>
            <div style={style.picCont}></div>
        </section>
    );
};

export default Icons;

const style = {
    Cont: {},

    iconCont: {},

    settingsLink: {
        border: ".1rem solid white",
        borderRadius: ".5rem",
        backgroundColor: "white",
        color: "grey",
        padding: ".3rem",
        margin: "1rem",
    },
    editProfileLink: {
        border: ".1rem solid white",
        borderRadius: ".5rem",
        backgroundColor: "white",
        color: "green",
        padding: ".3rem",
        margin: "1rem",
    },

    picCont: {
        display: "flex",
        flexDirection: "row",
        border: "1px solid red",
        marginTop: "5rem",
        height: "10rem",
        width: "10rem",
    },
};
