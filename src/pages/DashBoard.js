import React, { useState } from "react";
import ChartHorz from "../components/charts/ChartHorz";
import ChartSmall from "../components/charts/ChartSmall";
import SimRadarChart from "../components/charts/SimRadarChart";

function DashBoard() {
    const [chartHorz] = useState([
        { chartHeader: "Income Overview" },
        // { chartHeader: "Savings Overview" },
    ]);

    const [chartSmall] = useState([
        { chartHeader: "Income" },
        // { chartHeader: "Savings" },
        // { chartHeader: "Spending" },
    ]);

    const [SimRadarChart] = useState([
        { chartHeader: "Radar-Chart" },
        // { chartHeader: "Savings" },
        // { chartHeader: "Spending" },
    ]);

    return (
        <section style={style.dashCont}>
            <h1 style={style.dashTitle}>Dashboard</h1>

            <p style={style.chartHorz}>
                {chartHorz.map((chartHorz, id) => (
                    <ChartHorz Key={id} id={id} chartHorz={chartHorz} />
                ))}
            </p>
            <p style={style.chartSmall}>
                {chartSmall.map((chartSmall, id) => (
                    <ChartSmall Key={id} id={id} chartSmall={chartSmall} />
                ))}
            </p>
            {/* <p style={style.simRadarChart}>
                {SimRadarChart.map((simRadarChart, id) => (
                    <SimRadarChart
                        Key={id}
                        id={id}
                        simRadarChart={simRadarChart}
                    />
                ))}
            </p> */}
        </section>
    );
}

export default DashBoard;

const style = {
    dashCont: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
    },

    dashTitle: {
        textAlign: "center",
    },
};
