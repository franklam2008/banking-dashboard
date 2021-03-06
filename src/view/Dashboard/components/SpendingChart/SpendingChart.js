import React from "react";
import { Doughnut } from "react-chartjs-2";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
import { options } from "./chartOption";
import {
  useSelector,
  // useDispatch
} from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  chartContainer: {
    position: "relative",
    height: "300px",
  },
  stats: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
  device: {
    textAlign: "center",
    padding: theme.spacing(1),
  },
  deviceIcon: {
    color: theme.palette.icon,
  },
}));

const SpendingChart = (props) => {
  const { className } = props;
  const classes = useStyles();
  const spendingData = useSelector((state) => state.spendingData);
  const devices = useSelector((state) => state.devices);

  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader title="Spending" />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Doughnut data={spendingData} options={options} />
        </div>
        <div className={classes.stats}>
          {devices.map((device) => (
            <div className={classes.device} key={device.title}>
              <Typography variant="body1">{device.title}</Typography>
              <Typography style={{ color: device.color }} variant="h2">
                {device.value}%
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

SpendingChart.propTypes = {
  className: PropTypes.string,
};

export default SpendingChart;
