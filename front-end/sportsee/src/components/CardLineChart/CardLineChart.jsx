import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

import "./CardLineChart.css";
const arrayXAxisLabel = ["L", "M", "M", "J", "V", "S", "D"];

function mapData(data) {
  return data?.map((data, index) => {
    data.day = arrayXAxisLabel[index]; // Associe les jours abrégés à chaque session.
    data.idx = index; // Ajoute un index pour identifier chaque point.
    return data;
  });
}

const ActiveDot = (props) => {
  const { cx, cy } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x={cx - 9}
      y={cy - 9}
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13.8607C11.2091 13.8607 13 12.0809 13 9.88545C13 7.68999 11.2091 5.91022 9 5.91022C6.79086 5.91022 5 7.68999 5 9.88545C5 12.0809 6.79086 13.8607 9 13.8607Z"
        fill="white"
      />
      <path
        d="M9 16.3607C12.5752 16.3607 15.5 13.4762 15.5 9.88545C15.5 6.29466 12.5752 3.41022 9 3.41022C5.42481 3.41022 2.5 6.29466 2.5 9.88545C2.5 13.4762 5.42481 16.3607 9 16.3607Z"
        stroke="white"
        strokeOpacity="0.198345"
        strokeWidth="5"
      />
    </svg>
  );
};


function CardLineChart({ data }) {
  const [active, setActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);

  const CustomTooltip = ({ active, payload }) => {
    useEffect(() => {
      if (active && payload && payload.length > 0) {
        setActive(true);
        setSelectedValue(payload[0].payload.idx);
      }
    }, [active, payload]);

    useEffect(() => {
      if (!active) {
        setActive(false);
        setSelectedValue(data.sessions.length - 1);
      }
    }, [active]);

    if (active && payload && payload.length > 0) {
      return (
        <div className="custom-tooltip-linear">
          <p className="tooltip-min">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  if (!data || data.sessions.length === 0) {
    return null;
  }

  return (
    <section className="cardLineChart">
      <p className="cardLineChart-title">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height={263} wrapperStyle={{ overflow: "hidden" }}>
        <LineChart data={mapData(data.sessions)} outerRadius="75%" margin={{ top: 120 }}>
          <defs>
            <linearGradient
              type="basis"
              gradientUnits="userSpaceOnUse"
              id="color"
              x1="-200"
              y1="0"
              x2="500"
              y2="0"
            >
              <stop offset="0%" stopColor="#FF6F6F" />
              <stop offset="100%" stopColor="#FCE5E5" />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="day"
            padding={{ left: 15, right: 15 }}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#fff", opacity: "0.5", fontSize: 12, fontWeight: 500 }}
          />
          <Tooltip
            cursor={false}
            separator={false}
            active={true}
            animationEasing="ease-out"
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            margin={{ top: 100 }}
            stroke="url(#color)"
            strokeWidth={3}
            dot={false}
            activeDot={<ActiveDot />}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
export default CardLineChart;