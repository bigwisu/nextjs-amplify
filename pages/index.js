import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
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
