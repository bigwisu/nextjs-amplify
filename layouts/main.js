import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '../Components/Header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    paddingTop: 15
  }
}));

function MainLayout({ children }){
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header></Header>
      <Container className={classes.container} maxWidth="lg">
      { children }
      </Container>
    </React.Fragment>
  );
}

export default  MainLayout;
