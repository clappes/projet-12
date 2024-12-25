import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from '../../api'

import "./RadialBarsChart.css";

function RadialBarsChart() {
    const { id } = useParams();
    const [data, setData] = useState(null);

    const fetchActivity = async (id) => {
    const response = await getUser(id); 
    setData(response)
  }
  
    useEffect(() => {
      if (id) {
        fetchActivity(id)
      }
    }, [id]);

    if(!data || data === "can not get user") {
        return(null);
    } else {
        const formatedData = {
            todayScore: data.todayScore * 100 || data.score * 100,
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
    }
export default RadialBarsChart;