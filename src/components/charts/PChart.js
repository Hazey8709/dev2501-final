import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const data = [
    {
        month: "Js",
        a: 100,
        b: 80,
        c: 50,
    },
    {
        month: "React",
        a: 100,
        b: 85,
        c: 50,
    },
    {
        month: "NPM",
        a: 100,
        b: 75,
        c: 50,
    },
    {
        month: "HTML",
        a: 90,
        b: 70,
        c: 40,
    },
    {
        month: "CSS",
        a: 100,
        b: 100,
        c: 100,
    },
    {
        month: "Axios",
        a: 90,
        b: 80,
        c: 40,
    },
];

const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

const getPercent = (value, total) => {
    const ratio = total > 0 ? value / total : 0;

    return toPercent(ratio, 2);
};

const renderTooltipContent = (o) => {
    const { payload, label } = o;
    const total = payload.reduce((result, entry) => result + entry.value, 0);

    return (
        <div className='customized-tooltip-content'>
            <p className='total'>{`${label} (Total: ${total})`}</p>
            <ul className='list'>
                {payload.map((entry, index) => (
                    <li key={`item-${index}`} style={{ color: entry.color }}>
                        {`${entry.name}: ${entry.value}(${getPercent(
                            entry.value,
                            total
                        )})`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const PChart = ({ pChart }) => {
    return (
        <article key={pChart.id} style={style.cardCont}>
            <h1 style={style.h1}>{pChart.chartHeader}</h1>
            <AreaChart
                width={500}
                height={400}
                data={data}
                stackOffset='expand'
                // margin={{
                //     top: 10,
                //     right: 30,
                //     left: 0,
                //     bottom: 0,
                // }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='month' />
                <YAxis tickFormatter={toPercent} />
                <Tooltip content={renderTooltipContent} />
                <Area
                    type='monotone'
                    dataKey='a'
                    stackId='1'
                    stroke='darkRed'
                    fill='#e41e0c'
                />
                <Area
                    type='monotone'
                    dataKey='b'
                    stackId='1'
                    stroke='#9caa08'
                    fill='#ffc658'
                />
                <Area
                    type='monotone'
                    dataKey='c'
                    stackId='1'
                    stroke='#245b03'
                    fill='#388d03'
                />
            </AreaChart>
        </article>
    );
};

export default PChart;

const style = {
    cardCont: {
        display: "flex",
        flexDirection: "column",
        // position: "relative",
        float: "right",
        marginLeft: "53rem",
        // marginTop: "1rem",
    },

    h1: {
        textAlign: "center",
        textDecoration: "underline",
        fontWieght: "bold",
    },
};
