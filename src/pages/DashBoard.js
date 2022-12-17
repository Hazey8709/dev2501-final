import React, { useState } from "react";
import ChartHorz from "../components/charts/ChartHorz";
import ChartSmall from "../components/charts/ChartSmall";
// import SimRadarChart from "../components/charts/SimRadarChart";
// import PChart from "../components/charts/PChart";

function DashBoard() {
    const [chartHorz] = useState([{ chartHeader: "Website Monthly View's" }]);

    const [chartSmall] = useState([{ chartHeader: "Monthly Visits/Sales" }]);

    // const [simRadarChart] = useState([
    //     { chartTitle: "Skill Chart" },
    // ]);

    // const [pChart] = useState([
    //     { chartHeader: "Percentage Chart" },
    // ]);

    return (
        <section style={style.dashCont}>
            <h1 style={style.dashTitle}>Dashboard</h1>

            <div style={style.chartHorz}>
                {chartHorz.map((chartHorz, id) => (
                    <ChartHorz Key={id} id={id} chartHorz={chartHorz} />
                ))}
            </div>
            <div style={style.chartSmall}>
                {chartSmall.map((chartSmall, id) => (
                    <ChartSmall Key={id} id={id} chartSmall={chartSmall} />
                ))}
            </div>
            {/* <p style={style.simRadarChart}>
                {simRadarChart.map((simRadarChart, id) => (
                    <SimRadarChart
                        Key={id}
                        id={id}
                        simRadarChart={simRadarChart}
                    />
                ))}
            </p> */}
            {/* <p style={style.pChart}>
                {pChart.map((pChart, id) => (
                    <PChart Key={id} id={id} pChart={pChart} />
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
        position: "relative",
        height: "100%",
        width: "100%",
    },

    dashTitle: {
        textAlign: "center",
        fontSize: "3rem",
        textDecoration: "underline",
        color: "white",
    },
};
