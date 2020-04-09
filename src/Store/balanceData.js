import palette from '../theme/palette';

export const balanceData = {
  labels: [
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
  ],
  datasets: [
    {
      label: 'This year',
      backgroundColor: 'rgba(255, 99, 132, 0.0)',
      // backgroundColor: "rgba(255, 99, 132, 0.2)",
      // borderColor: "rgba(255, 99, 132, 1)",
      borderColor: palette.primary.main,
      data: [
        234300,
        235200,
        250200,
        280200,
        270200,
        280200,
        290200,
        300200,
        302200,
        290200,
        280200,
        300200,
        310200
      ]
    }
  ]
};