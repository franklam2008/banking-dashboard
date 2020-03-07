import React from 'react';
import { Grid } from '@material-ui/core';
import Budget from './components/Budget/Budget';
import TotalUsers from './components/TotalUsers/TotalUsers';
import TasksProgress from './components/TasksProgress/TasksProgress';
import TotalProfit from './components/TotalProfit/TotalProfit';
import LatestOrders from './components/LatestOrders/LatestOrders';
import LatestProducts from './components/LatestProducts/LatestProducts';
import LatestSales from './components/LatestSales/LatestSales';
import UsersByDevice from './components/UsersByDevice/UsersByDevice';

const Dashboard = () => {
  return (
    <div>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Budget />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalUsers />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TasksProgress />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalProfit />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestSales />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <UsersByDevice />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <LatestProducts />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestOrders />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
