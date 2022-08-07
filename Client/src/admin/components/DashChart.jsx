import React from "react";
import Chart from "react-apexcharts";

const DashChart = ({ plotdata, xName, yName }) => {
    // TODO:
    // Use this chart component to create charts for the admin
    // dashboard
  const options = {
    chart: {
      type: "line",
      heaight: 250,
    },
    xaxis: {
      categories: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JULY",
        "AUG",
        "SEPT",
        "OCT",
        "NOV",
        "DEC",
      ],
    },
  };

  const series = [
    {
        name: "Male Patient visits",
        data: [30, 56, 76, 45, 34, 67, 23, 78, 90, 23, 45, 63]
    },
    {
        name: "Female Patient Visits",
        data: [56, 90, 76, 85, 34, 17, 5, 18, 10, 23, 15, 93]
    }
  ];
  return <Chart options={options} series={series} type="bar" />;
};

export default DashChart;
