import palette from "../theme/palette";

export const spendingData = {
  labels: ["Rent", "Daily", "Insurance"],
  datasets: [
    {
      data: [1200, 567, 500],

      backgroundColor: [
        palette.info.light,
        palette.success.light,
        palette.warning.light,
      ],
      hoverBackgroundColor: [palette.info.main,
        palette.success.main,
        palette.warning.main,],
    },
  ],
};
export const devices = [
  {
    title: "Rent",
    value: "53",
    color: palette.info.light,
  },
  {
    title: "Daily",
    value: "25",
    color: palette.success.light,
  },
  {
    title: "Insurance",
    value: "22",
    color: palette.warning.light,
  },
];
