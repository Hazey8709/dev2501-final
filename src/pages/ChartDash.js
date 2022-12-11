import React from "react";

function ChartDash() {
    return (
        <section style={style.chartCont}>
            <h1>ChartDash</h1>
            <p>some stuff</p>
            <p>some stuff</p>
            <p>some stuff</p>
        </section>
    );
}

export default ChartDash;

const style = {
    chartDash: {
        display: "flex",
        flexDirection: "column",
        height: "90vh",
        width: "100vh",
    },
};
