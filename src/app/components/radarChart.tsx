"use client"
import { Radar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

function RadarChart() {
  const labels = ["1 月", "2 月", "3 月", "4 月", "5 月"];

  const graphData = {
    labels: labels,
    datasets: [
      {
        data: [2, 3, 5, 4, 3],
        borderColor: "rgb(75, 192, 192)",
      }
    ],
  };

  const options: {} = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  const divStyle: React.CSSProperties = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "100%",
  };

  return (
    <div className="radarChart" style={divStyle}>
      <Radar
        data={graphData}
        options={options}
        id="chart-key"
      />
    </div>
  );
}

export default RadarChart;