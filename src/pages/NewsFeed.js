import React, { useState } from "react";
import SimRadarChart from "../components/charts/SimRadarChart";
// import PChart from "../components/charts/PChart";

function NewsFeed(props) {
    const [simRadarChart] = useState([{ chartTitle: "Skill Chart" }]);

    const [pChart] = useState([{ chartHeader: "Percentage Chart" }]);

    return (
        <div style={style.mainCont}>
            <h1 style={style.pageTitle}>News Feed</h1>
            <div style={style.simRadarChart}>
                {simRadarChart.map((simRadarChart, id) => (
                    <SimRadarChart
                        Key={id}
                        id={id}
                        simRadarChart={simRadarChart}
                    />
                ))}
            </div>
            {/* <div style={style.pChart}>
                {pChart.map((pChart, id) => (
                    <PChart Key={id} id={id} pChart={pChart} />
                ))}
            </div> */}
        </div>
    );
}

export default NewsFeed;

const style = {
    mainCont: {
        // display: "flex",
        // flexDirection: "row",
        border: ".1rem solid green",
        height: "50rem",
        width: "90rem",
    },

    pageTitle: {
        textAlign: "center",
        textDecoration: "underline",
        fontSize: "3rem",
        color: "white",
    },

    simRadarChart: {
        // border: ".1rem solid yellow",
        margin: "5rem",
    },
};
