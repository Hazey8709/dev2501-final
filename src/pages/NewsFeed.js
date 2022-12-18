import React, { useState } from "react";
import SimRadarChart from "../components/charts/SimRadarChart";
import PChart from "../components/charts/PChart";

function NewsFeed(props) {
    const [simRadarChart] = useState([{ chartTitle: "Skill Chart" }]);

    const [pChart] = useState([{ chartHeader: "Percentage Chart" }]);

    return (
        <div style={style.mainCont}>
            <h1>News Feed</h1>
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
        </div>
    );
}

export default NewsFeed;

const style = {
    mainCont: {},
};
