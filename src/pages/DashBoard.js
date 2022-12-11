import React from "react";

function DashBoard() {
    return (
        <section style={style.dashCont}>
            <p>Logo PlaceHolder</p>
            <h1>DashBoard</h1>
            <p>Place chart's here</p>
        </section>
    );
}

export default DashBoard;

const style = {
    dashCont: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "99vh",
    },
};
