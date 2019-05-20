import React from 'react';

import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';


export default function StatsChart(props) {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart
        data={props.stats}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line name="Clones in managed Devices" type="monotone" dataKey="managedDevices" stroke={green[500]} />
        <Line name="Clones in unmanaged Devices" type="monotone" dataKey="unmanagedDevices" stroke={red[500]} />
      </LineChart>
    </ResponsiveContainer>
  );
}