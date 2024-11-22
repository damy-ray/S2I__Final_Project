import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
//import Loader from './Loader';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChartComponent = ({ data, dataLabel, title, type, chartType }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (data.length === 0) return;

    let labels = [], values = [], averages = [];

    if (type === 'co2') {
      labels = data.map(item => item.year);
      values = data.map(item => item.trend);
    } else if (type === 'nitrous') {
      labels = data.map(item => item.date);
      values = data.map(item => item.trend);
      averages = data.map(item => item.average);
    } else if (type === 'methane') {
      labels = data.map(item => item.date);
      values = data.map(item => item.trend);
      averages = data.map(item => item.average);
    } else if (type === 'ice') {
      labels = data.map(item => item.date);
      values = data.map(item => item.monthlyMean);
    } else if (type === 'temperature') {
      labels = data.map(item => item.time);
      values = data.map(item => item.land);
    }

    setChartData({
      labels,
      datasets: [
        {
          label: dataLabel,
          data: values,
          fill: chartType === 'area', 
          backgroundColor: type === 'area' ? 'rgba(75,192,192,0.2)' : 'rgba(75,192,192,1)',
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1,
        },
        
        type === 'methane' || type === 'nitrous'
          ? {
              label: `${type.charAt(0).toUpperCase() + type.slice(1)} Average`,
              data: averages,
              fill: chartType === 'area',
              borderColor: 'rgba(153,102,255,1)',
              backgroundColor: chartType === 'area' ? 'rgba(153,102,255,0.2)' : 'rgba(153,102,255,1)',
              tension: 0.1,
            }
          : null,
      ].filter(Boolean), 
    });
  }, [data, chartType, type, dataLabel]);

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: title },
    },
    scales: {
      x: { title: { display: true, text: 'Date' } },
      y: {
        title: {
          display: true,
          text: type === 'co2' ? 'CO2 Levels (ppm)' : 'Levels (ppb)',
        },
      },
    },
  };

  if (!chartData) return;

  return <Line data={chartData} options={options} />;
};

export default ChartComponent;
