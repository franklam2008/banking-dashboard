import React from "react";
import { Grid } from "@material-ui/core";
import AccountProfile from "./components/AccountProfile/AccountProfile";
import AccountDetails from "./components/AccountDetails/AccountDetails";

import VSensorjs from "../../components/VisibilitySensor";
import {
  useSelector
  // useDispatch
} from "react-redux";
const Account = () => {
  const profile = useSelector(state => state);
  return (
    <VSensorjs>
      <div>
        <Grid container spacing={4}>
          <Grid item lg={4} md={6} xl={4} xs={12}>
            <AccountProfile state={profile} />
          </Grid>
          <Grid item lg={8} md={6} xl={8} xs={12}>
            <AccountDetails />
          </Grid>
        </Grid>
      </div>
    </VSensorjs>
  );
};

export default Account;
