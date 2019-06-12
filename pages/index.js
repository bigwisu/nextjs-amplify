import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from '../Components/Header';
import HomeActivityCard from '../Components/HomeActivityCard';
import { makeStyles } from '@material-ui/core/styles';

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
    <React.Fragment>
      <Header></Header>
      <Container className={classes.container} maxWidth="lg">
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
      </Container>
    </React.Fragment>
  );
}
