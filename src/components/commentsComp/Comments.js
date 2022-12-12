import React from "react";
// import Cform from "./Cform";
// import CCard from "../CCard";

const Comments = (props) => {
    return (
        <section style={style.mainCommentsCont}>
            {/* <Cform /> */}
            <div style={style.comsCont}>
                {/* <CCard
                    cCardTitle='Card Title'
                    cCardDetails='Card details Card details Card details Card details Card details Card details'
                /> */}
            </div>
        </section>
    );
};

export default Comments;

const style = {
    mainCommentsCont: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid white",
        borderRadius: "1rem",
        backgroundColor: "#0005",
        marginTop: "2rem",
        // height: "30rem",
        width: "100%",
    },

    comsCont: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid white",
        borderRadius: ".4rem",
        backgroundColor: "#aaaaaa",
        marginLeft: "48%",
        marginTop: "1rem",
        marginBottom: "1rem",
        marginRight: "1rem",
        padding: ".5rem",
        width: "50%",
        height: "100%",
    },
};
