import React from "react";
import TabletMacIcon from "@material-ui/icons/TabletMac";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
export const data = {
  labels: ["Desktop", "Tablet", "Mobile"],
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
    title: "Desktop",
    value: "63",
    icon: <LaptopMacIcon />,
    color: "#FF6384"
  },
  {
    title: "Tablet",
    value: "15",
    icon: <TabletMacIcon />,
    color: "#36A2EB"
  },
  {
    title: "Mobile",
    value: "23",
    icon: <PhoneIphoneIcon />,
    color: "#FFCE56"
  }
];
