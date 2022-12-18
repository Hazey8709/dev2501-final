//!   Not Being used in Comments.js .....

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import CAvatar from "./NoobieJ-logo-1.png";

const CCard = (props) => {
    return (
        <section style={style.cardCont}>
            <img src={CAvatar} alt={props.alt} style={style.cCardImage} />
            <h3 style={style.cCardStatus}>Card 1</h3>

            <p style={style.cCardDetails}>
                Did you see that last post it was awesome. check it out. Did you
                see that last post it was awesome. check it out. Did you see
                that last post it was awesome. check it out
            </p>
            <button type='edit' style={style.editBtn}>
                <FaEdit />
            </button>
            <button type='delete' style={style.deleteBtn}>
                <FaTrash />
            </button>
        </section>
    );
};

export default CCard;

const style = {
    cardCont: {
        border: "2px outset white",
        borderRadius: ".5rem",
        backgroundColor: "#0005",
        margin: "0 auto",
        // marginTop: ".5rem",
        marginBottom: "2rem",
        width: "90%",
        height: "20rem",
    },

    cCardImage: {
        // border: "1px solid yellow",
        // borderRadius: ".1rem",
        marginTop: ".5rem",
        padding: ".5rem",
        width: "5rem",
        height: "4rem",
    },

    cCardStatus: {
        textAlign: "center",
    },

    cCardDetails: {
        textAlign: "center",
    },

    editBtn: {
        display: "flex",
        flexDirection: "row",
        border: "3px outset black",
        borderRadius: ".3rem",
        margin: "0 auto",
        backgroundColor: "#52be80",
        color: "darkGreen",
        fontWeight: "bold",
        cursor: "pointer",
    },

    deleteBtn: {
        display: "flex",
        flexDirection: "row",
        border: "2px outset black",
        borderRadius: ".3rem",
        margin: "0 auto",
        marginTop: ".3rem",
        backgroundColor: "#f5b7b1",
        color: "red",
        fontWeight: "bold",
        cursor: "pointer",
    },
};
