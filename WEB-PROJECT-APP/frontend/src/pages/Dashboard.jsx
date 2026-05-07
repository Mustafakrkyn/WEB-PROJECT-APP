import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Dashboard = ({ data }) => {

  // 📊 toplam ağırlık hesapla
  const labels = data.map((_, i) => `Day ${i + 1}`);

  const weights = data.map((ex) => {
    return Number(ex.sets) * Number(ex.reps) * Number(ex.weight);
  });

  const chartData = {
    labels: labels.length ? labels : ["No Data"],
    datasets: [
      {
        label: "Total Workout Volume",
        data: weights.length ? weights : [0],
        borderColor: "blue",
        tension: 0.3
      }
    ]
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-3">Progress Dashboard</h2>

      <Line data={chartData} />

    </div>
  );
};

export default Dashboard;