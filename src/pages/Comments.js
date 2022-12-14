import React, { Component } from "react";
import CForm from "../components/commentsComp/CForm";
import CCard from "../components/commentsComp/CCard";
import ComList from "../components/commentsComp/ComList";

class Comments extends Component {
    state = {
        cList: [
            {
                cName: "name",
                cStatus: "status",
                cDescp: "description",
                cImg: "img",
                cAlt: "bread is white--alt",
            },
            {
                cName: "bread",
                cStatus: "status",
                cDescp: "description",
                cImg: "img",
                cAlt: "bread is white--alt",
            },
            {
                cName: "bread",
                cStatus: "status",
                cDescp: "description",
                cImg: "img",
                cAlt: "bred is white --alt",
            },
        ],
    };

    render() {
        let commentsList = this.state.cList.map((element, i) => {
            return <ComList key={i} val={element} />;
        });

        return (
            <section style={style.mainCommentsCont}>
                <CForm />
                <div style={style.comsCont}>
                    <CCard />
                    {commentsList}
                </div>
            </section>
        );
    }
}
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
