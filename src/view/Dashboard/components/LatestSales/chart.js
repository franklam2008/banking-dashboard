import palette from '../../../../theme/palette';

export const data = {
  labels: [
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
  ],
  datasets: [
    {
      label: 'This year',
      // backgroundColor: palette.primary.main,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",

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
      ]
    }
  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: false },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: palette.divider,
    backgroundColor: palette.white,
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: palette.divider
        }
      }
    ]
  }
};
