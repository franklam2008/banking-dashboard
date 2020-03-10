import React from "react";
import { Grid } from "@material-ui/core";

import Notifications  from "./components/Notifications/Notifications";
import Password  from "./components/Password/Password";
import VSensorjs from "../../components/VisibilitySensor";

const Settings = () => {
  return (
    <VSensorjs>
      <div>
        <Grid container spacing={4}>
          <Grid item md={7} xs={12}>
            <Notifications />
          </Grid>
          <Grid item md={5} xs={12}>
            <Password />
          </Grid>
        </Grid>
      </div>
    </VSensorjs>
  );
};

export default Settings;
