import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, Grid, Typography, Avatar } from "@material-ui/core";
import MoneyIcon from "@material-ui/icons/Money";
import { useStore } from "../../../../Store/UserStore";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  content: {
    alignItems: "center",
    display: "flex"
  },
  title: {
    fontWeight: 400
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center"
  },
  differenceIcon: {
    color: theme.palette.success.dark
  },
  differenceValue: {
    color: theme.palette.success.dark,
    marginRight: theme.spacing(1)
  }
}));

const Checking = props => {
  const { className, ...rest } = props;
  const { state } = useStore();
  const classes = useStyles();
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="h5"
            >
              Checking Account
            </Typography>
            <Typography variant="h5">${state.checking}</Typography>
            <div className={classes.difference}>
              <ArrowUpwardIcon className={classes.differenceIcon} />
              <Typography className={classes.differenceValue} variant="body2">
                12%
              </Typography>
              <Typography className={classes.caption} variant="caption">
                Since last month
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MoneyIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Checking.propTypes = {
  className: PropTypes.string
};

export default Checking;
