import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";

import "./RadialBarsChart.css";

function RadialBarsChart({ score }) {
    if (!score) {
      return null;
    }
  
    const formatedData = {
      todayScore: score * 100, // Conversion en pourcentage
    };
  
    return (
      <section className="radialbarchart">
        <p className="radialbarchart-legend">Score</p>
        <article className="radialbarchart-innerlayout">
          <p>{formatedData.todayScore} % <span>de votre objectif</span></p>
        </article>
        <ResponsiveContainer width="100%" height={263}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="65%"
            outerRadius="80%"
            data={[formatedData]}
            startAngle={90}
            barSize={10}
            endAngle={450}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
            <RadialBar
              label={false}
              fill="#ff0000"
              dataKey="todayScore"
              cornerRadius={50}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </section>
    );
  }
export default RadialBarsChart;