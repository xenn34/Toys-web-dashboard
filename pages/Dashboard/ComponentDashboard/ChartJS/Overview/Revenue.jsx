import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../../ChartJS/chart.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RevenueBarChart = () => {
  const data = {
    labels: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    datasets: [
      {
        label: "Doanh thu (VNĐ)",
        data: [5000000, 9000000, 3000000, 3000000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.9)", // Màu cho Tuần 1
          "rgba(54, 162, 235, 0.9)", // Màu cho Tuần 2
          "rgba(255, 206, 86, 0.9)", // Màu cho Tuần 3
          "rgba(75, 192, 192, 0.9)", // Màu cho Tuần 4
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 2, // Tăng độ dày cho viền cột
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2 className="title">BIỂU ĐỒ DOANH THU THÁNG</h2>{" "}
      {/* Áp dụng class title */}
      <br />
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueBarChart;
