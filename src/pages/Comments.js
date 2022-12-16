import React, { Component } from "react";
import CForm from "../components/commentsComp/CForm";
// import CCard from "../components/commentsComp/CCard";
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
                cName: "Name",
                cStatus: "status",
                cDescp: "description",
                cImg: "img",
                cAlt: "bread is white--alt",
            },
            // {
            //     cName: "Name",
            //     cStatus: "status",
            //     cDescp: "description",
            //     cImg: "img",
            //     cAlt: "bred is white --alt",
            // },
        ],
    };

    getInput = (e) => {
        this.setState({
            [e.target.value]: e.target.value,
        });
    };

    addItem = (e) => {
        e.preventDefault();
        this.setState({
            cList: [
                ...this.state.cList,
                {
                    cName: this.state.cName,
                    // cStatus: this.state.cStatus,
                    // cDescp: this.state.cDescp,
                    // cImg: this.state.cImg,
                },
            ],
        });
        e.target.reset();
    };

    delItem = (key) => {
        console.log("Button Click")
        const newCList = [...this.state.cList];
        newCList.splice(key, 1);
        this.setState(() => ({
            cList: newCList,
        }));
    };

    render() {
        let commentsList = this.state.cList.map((element, i) => {
            return (
                <ComList
                    key={i}
                    val={element}
                    delItem={() => this.delItem(i)}
                />
            );
        });

        return (
            <section style={style.mainCommentsCont}>
                <CForm getInput={this.getInput} addItem={this.addItem} />
                <div style={style.comsCont}>
                    {/* <CCard /> */}
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
