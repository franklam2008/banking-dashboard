import React from "react";
import { Grid } from "@material-ui/core";
import Checking from "./components/Checking/Checking";
import Saving from "./components/Saving/Saving";
import Credit from "./components/Credit/Credit";
import Investment from "./components/Investment/Investment";
import LatestTransactions from "./components/LatestTransactions/LatestTransactions";
import BalanceChart from "./components/BalanceChart/BalanceChart";
import SpendingChart from "./components/SpendingChart/SpendingChart";
import Greeting from "./components/Greeting/Greeting";
import Accounts from "./components/Accounts/Accounts";
import VSensorjs from "../../components/VisibilitySensor";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, } from "react-redux";
const Dashboard = () => {
  const state = useSelector(state => state);
  const { checking, credit, savingProgress, invest } = state;
  return (
    <div>
      <VSensorjs>
        <Grid container spacing={4}>
          <Greeting />
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Checking checking={checking} />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Saving saving={savingProgress} />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Credit credit={credit} />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Investment invest={invest} />
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <Accounts />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <BalanceChart />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <SpendingChart />
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <LatestTransactions />
          </Grid>
        </Grid>
      </VSensorjs>
    </div>
  );
};

export default Dashboard;
