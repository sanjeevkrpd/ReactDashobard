import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
const Chart = () => {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10,9,9] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area : true
        },
      ]}
      width={750}
      height={500}
    />
  );
}

export default Chart