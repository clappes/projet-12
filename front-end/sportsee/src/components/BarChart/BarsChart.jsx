import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, CartesianAxis } from 'recharts';


import blackPoint from '../../assets/black-point.svg'
import redPoint from '../../assets/red-point.svg'
import "./BarsChart.css"

const CustomTooltip = ({active, payload}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className='kilogram-tooltip'>{`${payload[0].value}kg`}</p>
        <p className='calories-tooltip'>{`${payload[1].value}kCal`}</p>
      </div>
    )
  } else {
    return null
  }
}



function BarsChart({ data }) {
  if (!data || data.sessions.length === 0) {
    return null;
  }

  return (
    <section className='barsChart'>
      <article className='barsChart-legend'>
        <h2>Activité quotidienne</h2>
        <div className='legend'>
          <p><img src={blackPoint} alt="Black point" />Poids (kg)</p>
          <p><img src={redPoint} alt="Red point" />Calories brûlées (kCal)</p>
        </div>
      </article>
      <ResponsiveContainer width={763} height={177}>
        <BarChart data={data.sessions}>
          <CartesianGrid vertical={false} strokeDasharray="2 2" />
          <CartesianAxis strokeDasharray="0" />
          <XAxis
            dataKey={(session, index) => index + 1} // Affiche les index +1 comme tick
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            dataKey="calories"
            orientation='right'
            tickCount={3}
            tickLine={false}
            axisLine={false}
            type="number"
          />
          <Tooltip
            animationEasing="ease-out"
            offset={40}
            wrapperStyle={{ outline: "none" }}
            content={<CustomTooltip />}
          />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

export default BarsChart;