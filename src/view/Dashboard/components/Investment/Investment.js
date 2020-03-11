import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, Grid, Typography, Avatar } from "@material-ui/core";
import { useStore } from "../../../../Store/UserStore";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  content: {
    alignItems: "center",
    display: "flex"
  },
  title: {
    fontWeight: 400
  },
  avatar: {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
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
    color: theme.palette.success.main
  },
  differenceValue: {
    color: theme.palette.success.light,
    marginRight: theme.spacing(1)
  },
  caption: {
    color: theme.palette.success.light
  }
}));

const Investment = props => {
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
              color="inherit"
              gutterBottom
              variant="h5"
            >
              INVESTMENT
            </Typography>
            <Typography color="inherit" variant="h5">
              ${state.invest}
            </Typography>
            <div className={classes.difference}>
              <ArrowUpwardIcon className={classes.differenceIcon} />
              <Typography className={classes.differenceValue} variant="body2">
                3%
              </Typography>
              <Typography className={classes.caption} variant="caption">
                Since last month
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <TrendingUpOutlinedIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Investment.propTypes = {
  className: PropTypes.string
};

export default Investment;
