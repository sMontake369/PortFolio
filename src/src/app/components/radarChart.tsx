"use client"

import { Radar } from "react-chartjs-2";
import Chart, { type ChartOptions } from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import { categories } from "@/components/skills";
import type { qualificationReviews } from "./mock/mock";
Chart.register(CategoryScale);

export const RadarChart = ({ params }: { params: { data: qualificationReviews[] } }) => {

  const overallRating: { [key: string]: number } = {
    "ビジネス変革": 0,
    "データ活用": 0,
    "テクノロジー": 0,
    "セキュリティ": 0,
    "パーソナルスキル": 0
  };

  if(params.data !== undefined) {
    const skillReviews = params.data.flatMap((q) => q.skillReviews);
    for (const review of skillReviews) {
      const categoryEntry = Object.entries(categories.reduce((acc, c) => {
        acc[c.name] = c.items;

        return acc;
      }, {} as { [key: string]: string[] })).findLast(([_, skills]) => skills.includes(review.skillName));

      if (categoryEntry) {
        const [category] = categoryEntry;
        overallRating[category] += review.rating;
      }
    }
  }

  const graphData = {
    labels: ["ビジネス変革", "データ活用", "テクノロジー", "セキュリティ", "パーソナルスキル"],
    datasets: [
      {
        data: Object.values(overallRating),
        borderColor: "rgb(75, 192, 192)",
      }
    ],
  };

  const options: ChartOptions<'radar'> = {
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      line: {
        borderWidth: 2.5
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
        max: Math.max(...Object.values(overallRating)) + 2,
        pointLabels: {
          color: "black",
          font: {
            size: 11,
            weight: "bold",
          },
        },
        ticks: {
          stepSize: 5, 
          display : false,
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
