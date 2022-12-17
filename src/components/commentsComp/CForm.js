import React from "react";
import SubmitBtn from "../buttonsComp/SubmitBtn";

const CForm = (props) => {
    return (
        <form style={style.formCont} onSubmit={props.addItem}>
            <input
                name='cName'
                value={props.cName}
                onChange={props.getInput}
                placeholder='Joe Smith:'
                style={style.inputName}
                required
            />
            <input
                name='cStatus'
                value={props.cStatus}
                onChange={props.getInput}
                placeholder='Status: '
                style={style.inputTitle}
                // required
            />
            <textarea
                name='cDetails'
                value={props.cDetails}
                onChange={props.getInput}
                placeholder='Details:'
                // required
                style={style.comment}
            />
            <div style={style.subBtn}>
                <SubmitBtn />
            </div>
        </form>
    );
};

export default CForm;

const style = {
    formCont: {
        position: "absolute",
        border: "1px solid white",
        borderRadius: ".4rem",
        backgroundColor: "#0005",
        margin: "0 auto",
        marginTop: "13rem",
        marginLeft: "4.3rem",

        padding: ".5rem",
        width: "15.7rem",
        height: "18.5rem",
    },

    inputName: {
        border: ".2rem inset black",
        borderRadius: ".2rem",
        width: "7.2rem",
    },

    inputTitle: {
        border: ".2rem inset black",
        borderRadius: ".2rem",
        flexDirection: "row",
        width: "7.2rem",
    },

    comment: {
        border: ".2rem inset black",
        borderRadius: ".2rem",
        position: "relative",
        width: "15rem",
        height: "11rem",
    },

    subBtn: {
        display: "flex",
    },
};
