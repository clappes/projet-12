import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { getPerformance } from '../../api'

import "./RadarsChart.css";

function mapData(perfs) {
  return perfs?.data.map((perf) => {
    switch (perf.kind) {
      case 1:
        perf.kind = "Cardio";
        break;
      case 2:
        perf.kind = "Energie";
        break;
      case 3:
        perf.kind = "Endurance";
        break;
      case 4:
        perf.kind = "Force";
        break;
      case 5:
        perf.kind = "Vitesse";
        break;
      case 6:
        perf.kind = "Intensité";
        break;
      default:
        break;
    }
    return perf
  } )
}

function RadarsChart() {

    const { id } = useParams();
    const [data, setData] = useState(null);
    
    const fetchPerformance = async (id) => {
      const response = await getPerformance(id); 
      setData(response)
    }
      
    useEffect(() => {
      if (id) {
        fetchPerformance(id)
      }
    }, [id]);
      
    if (!data || data === "can not get user") {
      return (null);
    } else {

    return (
        <ResponsiveContainer width="100%" height={263}>
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={mapData(data)}>
          <PolarGrid radialLines={false}/>
            <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 12 }}/>
            <Radar name={data?.id} dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.8} />
          </RadarChart>
        </ResponsiveContainer>
      );
    }
  }

export default RadarsChart;