import { CartesianGrid, ResponsiveContainer, Tooltip, YAxis } from "recharts";
import React from "react";
import { Line } from "recharts";
import { LineChart, XAxis } from "recharts";
import "./Chart.css";
const data = [
  { name: "Mar 21", Transaction: 400 },
  { name: "Mar 22", Transaction: 1000 },
  { name: "Mar 23", Transaction: 48 },
  { name: "Mar 24", Transaction: 0 },
  { name: "Mar 25", Transaction: 400 },
  { name: "Mar 26", Transaction: 1000 },
  { name: "Mar 27", Transaction: 20 },
  { name: "Mar 28", Transaction: 0 },
];
const Chart = () => {
  return (
    <>
      <span className="uppercase">MIND TRANSACTION HISTORY LaST 14 DAYS</span>
      <ResponsiveContainer
        width="100%"
        height={120}
        className="mt-2 ml-[-35px] !text-[10px]"
      >
        <LineChart width="100%" data={data}>
          <CartesianGrid strokeDasharray="10 10" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            connectNulls
            type="monotone"
            dataKey="Transaction"
            stroke="#079ce0"
            fill="#079ce0"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
