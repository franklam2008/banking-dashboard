import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import Budget from "./components/Budget/Budget";
import TotalUsers from "./components/TotalUsers/TotalUsers";
import TasksProgress from "./components/TasksProgress/TasksProgress";
import TotalProfit from "./components/TotalProfit/TotalProfit";
import LatestOrders from "./components/LatestOrders/LatestOrders";
import LatestProducts from "./components/LatestProducts/LatestProducts";
import LatestSales from "./components/LatestSales/LatestSales";
import UsersByDevice from "./components/UsersByDevice/UsersByDevice";
const TitleCon = styled.div`
  display: flex;
 
`;
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    marginLeft: theme.spacing(2),
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <TitleCon>
      <Typography className={classes.title} variant="h4">
        Good Morning, Guest User
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        Here's what's happening
      </Typography>
      </TitleCon>
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <Budget />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalUsers />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TasksProgress />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalProfit />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestSales />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <UsersByDevice />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <LatestProducts />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestOrders />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
