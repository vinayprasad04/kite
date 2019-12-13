import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const KiteDashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item md={7} xs={12}>
          dfsf
        </Grid>

        <Grid item md={5} xs={12}>
          dsfs
        </Grid>

      </Grid>
    </div>
  );
};

export default KiteDashboard;
