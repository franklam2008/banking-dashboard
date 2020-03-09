import React from "react";
import { Line } from "react-chartjs-2";

export default function CoronaChart() {
  var labels = [
    "Jan 22",
    "Jan 23",
    "Jan 24",
    "Jan 25",
    "Jan 26",
    "Jan 27",
    "Jan 28",
    "Jan 29",
    "Jan 30",
    "Jan 31",
    "Feb 1",
    "Feb 2",
    "Feb 3",
    "Feb 4",
    "Feb 5",
    "Feb 6",
    "Feb 7",
    "Feb 8",
    "Feb 9",
    "Feb 10",
    "Feb 11",
    "Feb 12",
    "Feb 13",
    "Feb 14",
    "Feb 15",
    "Feb 16",
    "Feb 17",
    "Feb 18"
  ];
  var data1 = {
    labels: labels,
    datasets: [
      {
        label: "Total Case",
        data: [
          580,
          845,
          1315,
          2015,
          2800,
          4581,
          6058,
          7813,
          9821,
          11948,
          14551,
          17389,
          20628,
          24553,
          28276,
          31439,
          34876,
          37552,
          40553,
          43099,
          45170,
          59283,
          64437,
          67100,
          69197,
          71329,
          73332,
          75184
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="homeSectionCon coronaCon">
      <h3 className="colorHeader">
        <strong>Corona Chart</strong>
      </h3>
  
          {" "}
          <div className="chartCon">
            <Line data={data1} options={{ maintainAspectRatio: false }} />
          </div>
      
    </div>
  );
}
