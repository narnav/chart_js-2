import React from "react";
import { Bar, Line } from "react-chartjs-2";

const state = {
  labels: ["January", "February", "March", "April", "May", "a", "b", "c"],
  datasets: [
    {
      label: "amount",
      backgroundColor: "rgba(175,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 23, 35, 56],
    },
  ],
};

const state1 = {
  labels: ["January", "February", "March", "April", "May", "a", "b", "c"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: "rgba(15,222,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 23, 35, 56],
    },
  ],
};
const MyChart = () => {
  return (
    <div style={{ height: "200vh", width: "200vh" }}>
      <div>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
      <div>
        <Bar
          data={state1}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
      <div>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    </div>
  );
};

export default MyChart;
