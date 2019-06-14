import React from 'react';
import Grid from '@material-ui/core/Grid';
import HomeActivityCard from '../Components/HomeActivityCard';
import { makeStyles } from '@material-ui/core/styles';
import Page from '../layouts/main';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    paddingTop: 15
  }
}));

export default function Index() {
  const classes = useStyles();

  return (
    <Page>
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <HomeActivityCard />
        </Grid>
        <Grid item sm={4}>
          <HomeActivityCard />
        </Grid>
        <Grid item sm={4}>
          <HomeActivityCard />
        </Grid>
        <Grid item sm={4}>
          <HomeActivityCard />
        </Grid>
        <Grid item sm={4}>
          <HomeActivityCard />
        </Grid>
        <Grid item sm={4}>
          <HomeActivityCard />
        </Grid>
        <Grid item sm={4}>
          <HomeActivityCard />
        </Grid>
        <Grid item sm={4}>
          <HomeActivityCard />
        </Grid>
        <Grid item sm={4}>
          <HomeActivityCard />
        </Grid>
      </Grid>
    </Page>
  );
}
