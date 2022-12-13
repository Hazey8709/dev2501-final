import React, { useState } from "react";
import ChartHorz from "../components/charts/ChartHorz";
import ChartSmall from "../components/charts/ChartSmall";
import SimRadarChart from "../components/charts/SimRadarChart";
import PChart from "../components/charts/PChart";

function DashBoard() {
    const [chartHorz] = useState([
        { chartHeader: "Website Monthly View's" },
        // { chartHeader: "Savings Overview" },
    ]);

    const [chartSmall] = useState([
        { chartHeader: "Monthly Visits" },
        // { chartHeader: "Savings" },
        // { chartHeader: "Spending" },
    ]);

    const [simRadarChart] = useState([
        { chartTitle: "Skill Chart" },
        // { chartHeader: "Savings" },
        // { chartHeader: "Spending" },
    ]);

    const [pChart] = useState([
        { chartHeader: "Percentage Chart" },
        // { chartHeader: "chart" },
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
            <p style={style.simRadarChart}>
                {simRadarChart.map((simRadarChart, id) => (
                    <SimRadarChart
                        Key={id}
                        id={id}
                        simRadarChart={simRadarChart}
                    />
                ))}
            </p>
            <p style={style.pChart}>
                {pChart.map((pChart, id) => (
                    <PChart Key={id} id={id} pChart={pChart} />
                ))}
            </p>
        </section>
    );
}

export default DashBoard;

const style = {
    dashCont: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        height: "100%",
        width: "100%",
    },

    dashTitle: {
        textAlign: "center",
    },
};
