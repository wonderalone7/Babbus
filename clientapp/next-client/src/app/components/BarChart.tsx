import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface Props {
  inputdata: JsonData[];
}

interface AggregatedDataItem {
  topic: string;
  averageIntensity: number;
}

export function aggregateData(data: JsonData[]): AggregatedDataItem[] {
  const aggregate: Record<string, number[]> = {};

  data.forEach((item) => {
    if (!aggregate[item.topic]) {
      aggregate[item.topic] = [];
    }
    aggregate[item.topic].push(Math.round(item.intensity));
  });

  return Object.keys(aggregate).map((topic) => {
    const intensities = aggregate[topic];
    const averageIntensity =
      intensities.reduce((sum, intensity) => sum + intensity, 0) /
      intensities.length;

    return {
      topic,
      averageIntensity,
    };
  });
}

const BarChart: React.FC<Props> = ({ inputdata }) => {
  const aggregated = aggregateData(inputdata);

  console.log(aggregated);

  const labels = aggregated.map((item) => item.topic);
  const intensities = aggregated.map((item) => Math.round(item.averageIntensity));

  const chartData = {
    labels,
    datasets: [
      {
        label: "Intensity",
        data: intensities,
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: Math.max(...intensities) + 1,
        ticks: {
          stepSize: 1, // Set the step size to 1 for whole number ticks
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
