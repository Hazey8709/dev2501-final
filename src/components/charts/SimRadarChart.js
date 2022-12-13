import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
} from "recharts";

const data = [
    {
        subject: "HTML",
        Skill: 100,
        DeepSkill: 100,
        fullMark: 90,
    },
    {
        subject: "CSS",
        Skill: 90,
        DeepSkill: 95,
        fullMark: 98,
    },
    {
        subject: "JS",
        Skill: 85,
        DeepSkill: 70,
        fullMark: 85,
    },
    {
        subject: "Axios",
        Skill: 80,
        DeepSkill: 70,
        fullMark: 80,
    },
    {
        subject: "NPM",
        Skill: 80,
        DeepSkill: 75,
        fullMark: 80,
    },
    {
        subject: "GitHub",
        Skill: 90,
        DeepSkill: 75,
        fullMark: 95,
    },
];

const SimRadarChart = ({ simRadarChart }) => {
    return (
        <article key={simRadarChart.id} style={style.cardCont}>
            <h1 style={style.h1}>{simRadarChart.chartTitle}</h1>
            <RadarChart
                cx={300}
                cy={250}
                outerRadius={150}
                width={500}
                height={500}
                data={data}
                style={style.chart}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey='subject' />
                <PolarRadiusAxis />
                <Radar
                    name='Mike'
                    dataKey='Skill'
                    stroke='red'
                    fill='blue'
                    fillOpacity={0.3}
                />
                <Radar
                    name='Mike'
                    dataKey='DeepSkill'
                    stroke='red'
                    fill='blue'
                    fillOpacity={0.3}
                />
                <Radar
                    name='Mike'
                    dataKey='fullMark'
                    stroke='red'
                    fill='blue'
                    fillOpacity={0.3}
                />
                {/* <Line type='monotone' dataKey='A' stroke='blue' /> */}
            </RadarChart>
        </article>
    );
};

export default SimRadarChart;

const style = {
    cardCont: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid red",
        width: "20rem",
        height: "",
    },

    chart: {
        marginLeft: "0"
    },

    h1: {
        // textAlign: "center",
        textDecoration: "underline",
        fontWieght: "bold",
    },
};
