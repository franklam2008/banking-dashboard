import React from 'react';
import { Grid } from '@material-ui/core';

import { Notifications, Password } from './components';

const Settings = () => {
  return (
    <div >
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          md={7}
          xs={12}
        >
          <Notifications />
        </Grid>
        <Grid
          item
          md={5}
          xs={12}
        >
          <Password />
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;
