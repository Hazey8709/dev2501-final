import React from "react";
import EditBtn from "../buttonsComp/EditBtn";
import DeleteBtn from "../buttonsComp/DeleteBtn";

const ComList = (props) => {
    return (
        <article key={props.id} style={style.ComListCont}>
            <img src={props.val.cImg} style={style.cImg} alt={props.val.cAlt} />
            <h1 style={style.cName}>{props.val.cName}</h1>
            <h3 style={style.cStatus}>{props.val.cStatus}</h3>

            <p style={style.cDescp}>{props.val.cDescp}</p>
            <div style={style.btnCont}>
                <EditBtn onClick={props.editItem} />
                <DeleteBtn onClick={props.delItem} />
            </div>
        </article>
    );
};

export default ComList;

const style = {
    ComListCont: {
        border: "2px outset white",
        borderRadius: ".5rem",
        backgroundColor: "#0005",
        margin: "0 auto",
        // marginTop: ".5rem",
        marginBottom: "2rem",
        width: "80%",
        height: "20rem",
    },

    cImg: {
        // border: "1px solid white",
        borderRadius: "1.5rem",
        margin: ".5rem",
        padding: "1rem",
        width: "5rem",
        height: "4rem",
    },

    cName: {
        textAlign: "center",
        textDecoration: "underline",
        fontSize: "22px",
        color: "white",
    },

    cStatus: {
        textAlign: "center",
        color: "white",
    },

    cDescp: {
        textAlign: "center",
        color: "white",
    },

    btnCont: {
        display: "flex",
        marginTop: "1.5rem",
    },
};
