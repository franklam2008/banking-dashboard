import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import styled from "styled-components";
import Budget from "./components/Budget/Budget";
import TotalUsers from "./components/TotalUsers/TotalUsers";
import TasksProgress from "./components/TasksProgress/TasksProgress";
import TotalProfit from "./components/TotalProfit/TotalProfit";
import LatestOrders from "./components/LatestOrders/LatestOrders";
import LatestProducts from "./components/LatestProducts/LatestProducts";
import LatestSales from "./components/LatestSales/LatestSales";
import UsersByDevice from "./components/UsersByDevice/UsersByDevice";
import { useStore } from "../../Store/UserStore";
import BarChartIcon from "@material-ui/icons/BarChart";
import Slider from "react-slick";
import { useHistory } from "react-router-dom";
import VSensorjs from "../../components/VisibilitySensor"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TitleCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
const ImgCon = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px;
  img {
    height: 300px;
    height: 300px;
    @media (max-width: 960px) {
      height: 200px;
    }
    @media (max-width: 600px) {
      height: 150px;
    }
  }
`;
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  button: {
    width: 210
  }
}));
const Dashboard = () => {
  const { state } = useStore();
  let history = useHistory();
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div>
      <VSensorjs>

      <Grid container spacing={4}>
        <Grid item lg={4} md={6} xl={3} sm={6} xs={12}>
          <TitleCon>
            <Typography color="textSecondary">Dashboard</Typography>
            <Typography className={classes.title} variant="h4">
              1Good Morning, {state.user.name}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Here's what's happening
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<BarChartIcon />}
              onClick={()=>{history.push('/orders');}}
            >
              View Transactions
            </Button>
          </TitleCon>
        </Grid>
        <Grid item lg={8} md={6} xl={9} sm={6} xs={12}>
          <ImgCon>
            <img src="images/undraw_Data_points_ubvs.svg" alt="icon" />
          </ImgCon>
        </Grid>
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
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <div>
            <h2> Single Item</h2>
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </Grid>
      </Grid>
      </VSensorjs>

    </div>
  );
};

export default Dashboard;
