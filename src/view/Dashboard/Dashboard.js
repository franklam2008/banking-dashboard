import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, Card } from "@material-ui/core";
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
import Carousel from "react-slick";
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
  }
`;
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  img: {},
  title: {
    // marginLeft: theme.spacing(2),
    // display: "none",
    // [theme.breakpoints.up("sm")]: {
    //   display: "block"
    // }
  },
  button: {
    width: 150
  }
}));
const Dashboard = () => {
  const { state } = useStore();
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <TitleCon>
            <Typography color="textSecondary">Dashboard</Typography>
            <Typography className={classes.title} variant="h4">
              Good Morning, {state.user.name}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Here's what's happening
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<BarChartIcon />}
            >
              View Orders
            </Button>
          </TitleCon>
        </Grid>
        <Grid item lg={8} md={6} xl={9} xs={12}>
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
        <Card carousel>
          <Carousel {...settings}>
            <div>
              <img
                src="images/undraw_Data_points_ubvs.svg"
                alt="First slide"
                className="slick-image"
                style={{width:'200px'}}
              />
              <div className="slick-caption">
                <h4>Yellowstone National Park, United States</h4>
              </div>
            </div>
            <div>
              <img
                src="images/undraw_Data_points_ubvs.svg"
                alt="Second slide"
                className="slick-image"
                style={{width:'200px'}}
              />
              <div className="slick-caption">
                <h4>Somewhere Beyond, United States</h4>
              </div>
            </div>
            <div>
              <img
                src="images/undraw_Data_points_ubvs.svg"
                alt="Third slide"
                className="slick-image"
                style={{width:'200px'}}
              />
              <div className="slick-caption">
                <h4>Yellowstone National Park, United States</h4>
              </div>
            </div>
          </Carousel>
        </Card>
      </Grid>
    </div>
  );
};

export default Dashboard;
