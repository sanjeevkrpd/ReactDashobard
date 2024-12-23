import React from 'react';
import { Card } from 'antd';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const StatisticCard = ({ title, value, percentage, data, icon, color }) => {
  return (
    <Card
      bordered={false}
      style={{
        width: '100%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        borderRadius: '8px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color }}>{icon} {title}</p>
          <h2 style={{ margin: '8px 0 0' }}>${value}</h2>
          <p style={{ margin: 0, color: percentage > 0 ? 'green' : 'red' }}>
            {percentage > 0 ? '+' : ''}
            {percentage}%
          </p>
        </div>
        <div style={{ width: '50px', height: '50px' }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <XAxis hide />
              <YAxis hide />
              <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};

export default StatisticCard;
