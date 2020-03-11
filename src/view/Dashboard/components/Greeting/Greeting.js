import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import styled from "styled-components";
import { useStore } from "../../../../Store/UserStore";
import BarChartIcon from "@material-ui/icons/BarChart";
import { useHistory } from "react-router-dom";
import { greeting } from "../../../../helpers/greeting";

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

const Greeting = () => {
  var greetingWord = greeting();
  const { state } = useStore();
  let history = useHistory();
  const classes = useStyles();
  return (
    <>
      <Grid item lg={4} md={6} xl={3} sm={6} xs={12}>
        <TitleCon>
          <Typography color="textSecondary">Dashboard</Typography>
          <Typography className={classes.title} variant="h4">
            {greetingWord}, {state.user.name}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Here's what's happening
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<BarChartIcon />}
            onClick={() => {
              history.push("/orders");
            }}
          >
            ALL Transactions
          </Button>
        </TitleCon>
      </Grid>
      <Grid item lg={8} md={6} xl={9} sm={6} xs={12}>
        <ImgCon>
          <img src="images/undraw_Data_points_ubvs.svg" alt="icon" />
        </ImgCon>
      </Grid>
    </>
  );
};

export default Greeting;
