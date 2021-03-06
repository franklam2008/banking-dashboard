import React from "react";
import { makeStyles } from "@material-ui/styles";
import { IconButton, Grid, Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import VSensorjs from "../../components/VisibilitySensor";
import AccountsToolbar from "./components/AccountsToolbar/AccountsToolbar";
import AccountCard from "./components/AccountCard/AccountCard";

import {
  useSelector,
  // useDispatch
} from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    marginTop: theme.spacing(2),
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));

const ProductList = () => {
  const classes = useStyles();
  const accounts = useSelector((state) => state.accounts);
  return (
    <VSensorjs>
      <div className={classes.root}>
        <AccountsToolbar />
        <div className={classes.content}>
          <Grid container spacing={3}>
            {accounts.map((account) => (
              <Grid
                item
                key={account.id}
                lg={4}
                md={6}
                sm={6}
                xs={12}
              >
                <AccountCard account={account} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={classes.pagination}>
          <Typography variant="caption">1-5 of 5</Typography>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
    </VSensorjs>
  );
};

export default ProductList;
