
export const data = {
  labels: ["Rent", "Daily", "Insurance"],
  datasets: [
    {
      data: [63, 15, 23],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};
export const options = {
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  cutoutPercentage: 80,
  layout: { padding: 0 },
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
  }
};
export const devices = [
  {
    title: "Rent",
    value: "63",
    color: "#FF6384"
  },
  {
    title: "Daily",
    value: "15",
    color: "#36A2EB"
  },
  {
    title: "Insurance",
    value: "23",
    color: "#FFCE56"
  }
];
