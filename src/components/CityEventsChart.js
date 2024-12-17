import { useState, useEffect } from 'react';
import PropsType from 'prop-types';
import {
  ScatterChart,
  Scatter,
  XAxis, YAxis,
  ZAxis,
  Legend, 
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

  
const CityEventsChart = ({ allLocations, events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const getData = () => {
    const data = allLocations.map((location) => {
      const count = events.filter((event) => event.location === location).length
      const city = location.split((/, | - /))[0]
      return { city, count };
    })
    return data;
  }; 

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart
        width={730}
        height={250}
        margin={{
          top: 20,
          right: 20,
          bottom: 60,
          left: -10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="city"
          type="category"
          name="City"
          angle={60}
          interval={0}
          tick={{ dx: 20, dy: 40, fontSize: 14 }}
        />
        <YAxis dataKey="count" type="number" name="number of events" allowDecimals={false} />
        <ZAxis dataKey="z" type="number" range={[64, 144]} name="score" unit="km" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="Popular Cities Events Chart" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default CityEventsChart


CityEventsChart.propTypes = {
  allLocations: PropsType.array.isRequired,
  events: PropsType.array.isRequired
}