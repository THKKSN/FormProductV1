import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "../style/CircularGraph.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularGraph = ({ data, labels, evaluation }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(0, 250, 50, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(0, 250, 50, 1)"],
        borderWidth: 1,
        hoverOffset: 30, // This will add an offset to the segment when hovered
        
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "%";
            if (label) {
              label += ": ";
            }
            if (context.parsed !== null) {
              label += context.parsed + "%";
            }
            return label;
          },
        },
      },
    },
    elements: {
      center: {
        text: `${evaluation}%`,
        color: "#000000",
        fontStyle: "Sarabun",
        sidePadding: 20,
      },
    },
  };

  return (
    <div className={styles.graphContainer}>
      <Doughnut data={chartData} options={options} />
      <div className={styles.chartText}>
        <h1>{evaluation}</h1>
      </div>
    </div>
  );
};

export default CircularGraph;
