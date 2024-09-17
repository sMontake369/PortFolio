"use client"
import { Radar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale, Colors} from 'chart.js'; 
Chart.register(CategoryScale);

function RadarChart() {
  const labels = ["1月", "2月", "3月", "4月", "5月"];

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
    responsive: true,
    elements: {
      line: {
        borderWidth: 2
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        min: 0,
        max: 5,
        pointLabels: {
          font: {
            size: 13,
            weight: "bold",
          },
        },
        ticks: {
          stepSize: 1,
          display : false,
          // backdropColor: 'rgba(0, 0, 0, 0)',
          // font: {
          //   size: 13,
          //   weight: "bold",
          // },
        },
      },
    },
  };

  const divStyle: React.CSSProperties = {
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