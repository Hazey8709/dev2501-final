import React from "react";
import CForm from "../components/commentsComp/CForm";
import CCard from "../components/commentsComp/CCard";

const Comments = (props) => {
    return (
        <section style={style.mainCommentsCont}>
            <CForm />
            <div style={style.comsCont}>
                <CCard />
                {/* <CCard />
                <CCard /> */}
            </div>
        </section>
    );
};

export default Comments;

const style = {
    mainCommentsCont: {
        display: "flex",
        flexDirection: "column",
        // position: "relative",
        // border: "1px solid white",
        // borderRadius: "1rem",
        backgroundColor: "#0005",
        marginTop: ".1rem",
        // height: "30rem",
        width: "90rem",
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
