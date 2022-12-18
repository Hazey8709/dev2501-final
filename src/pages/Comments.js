import React, { Component } from "react";
import CForm from "../components/commentsComp/CForm";
// import CCard from "../components/commentsComp/CCard";
import ComList from "../components/commentsComp/ComList";
import girlAvatar from "../images/girlAvatar.png";
import guyAvatar from "../images/guyAvatar.png";
import monkeyAvatar from "../images/monkeyAvatar.png";

class Comments extends Component {
    state = {
        cList: [
            {
                cName: "Debra Gens",
                cStatus: "Feeling sick",
                cDescp: "Woke up with a cold yikes!",
                cImg: girlAvatar,
                cAlt: "bread is white--alt",
            },
            {
                cName: "Ken Bled",
                cStatus: "I Won!",
                cDescp: "800$ Lottery ticket sweet",
                cImg: guyAvatar,
                cAlt: "bread is white--alt",
            },
            {
                cName: "Joe Car",
                cStatus: "Sold 3 cars today",
                cDescp: "Having a great day!",
                cImg: monkeyAvatar,
                cAlt: "bred is white --alt",
            },
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
                    cStatus: this.state.cStatus,
                    cDescp: this.state.cDescp,
                    cImg: this.state.cImg,
                },
            ],
        });
        e.target.reset();
    };

    delItem = (key) => {
        //console.log("Del-Btn: Button Click");
        const newCList = [...this.state.cList];
        newCList.splice(key, 1);
        this.setState(() => ({
            cList: newCList,
        }));

        // const newCList = [...this.state.cList];
        // newCList.filter((list) => list.key !== key);
        // this.state(() => ({
        //     cList: newCList,
        // }));
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
                <h1 style={style.comPageTitle}>Comments</h1>
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

    comPageTitle: {
        textAlign: "center",
        textDecoration: "underline",
        fontSize: "3rem",
        color: "white",
    },

    comsCont: {
        display: "flex",
        flexDirection: "column",
        // border: "1px solid white",
        borderRadius: ".4rem",
        backgroundColor: "#aaaaaa",
        marginLeft: "48%",
        marginTop: "1rem",
        marginBottom: "1rem",
        marginRight: "1rem",
        padding: ".5rem",
        width: "40%",
        height: "90%",
    },
};
