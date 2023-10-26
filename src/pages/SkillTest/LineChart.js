import React from 'react';
import styles from './LineChart.module.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from 'recharts';

const LineCh = ({ score }) => {
  const data = [
    {
      name: '0%',
      'Your Score': 26,
    },
    {
      name: '20%',
      'Your Score': score,
    },
    {
      name: '25%',
      'Your Score': score,
    },
    {
      name: '60%',
      'Your Score': 45,
    },
    {
      name: '72%',
      'Your Score': score,
    },
    {
      name: '80%',
      'Your Score': 44,
    },
    {
      name: '100%',
      'Your Score': score,
    },
    {
      name: `${score}%`,
      'Your Score': 34,
    },
  ];

  return (
    <div className={styles.chartContainer}>
      <LineChart
        width={600}
        height={358}
        data={data}
        margin={{
          top: 0,
          right: -1,
          left: -61,
          bottom: 5,
        }}
      >
        <CartesianGrid horizontal={false} vertical={true} strokeDasharray="5" />
        <XAxis dataKey="name" type="category" domain={['0%', '100%']} />
        <YAxis />
        <Tooltip />
        <ReferenceLine
          x={score + '%'}
          stroke="blue"
          strokeDasharray="5 5"
          label={{ position: "top", value: `Score: ${score}`, fill: "red" }}
        />
        <ReferenceLine
          x="72%"
          stroke="orange"
          strokeDasharray="5 5"
          label={{ position: "top", value: `Score: ${score}`, fill: "red" }}
        />
        <Line
          type="monotone"
          dataKey="Your Score"
          stroke="#438af6"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default LineCh;
