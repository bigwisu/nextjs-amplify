import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import HeaderLogin from './HeaderLogin';
import HeaderProfile from './HeaderProfile';
import Hidden from '@material-ui/core/Hidden';
import BottomBar from './BottomBar';

import Auth from '@aws-amplify/auth';
import AwsConfig from '../configs/aws';
Auth.configure(AwsConfig);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FFF"
  },
  appBar: {
    backgroundColor: 'white',
    borderBottomStyle: 'solid', 
    borderBottomColor: teal[500]
  },
  title: {
    flexGrow: 1,
  }
}));

function UserAvatar(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <HeaderProfile />;
  }
  return <HeaderLogin />;
}

export default function Header() {
  const classes = useStyles();
  const [user, setUser] = useState(false);

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false 
    }).then(cognitoUser => {
      setUser(true);
    })
    .catch(err => {
      setUser(false);
    });
  }, []);

  return (
    <React.Fragment>
      <AppBar className={classes.appBar} color="inherit" position="static">
        <Container fixed>
          <Toolbar>
            <TypoGraphy  className={classes.title} variant="h5" color="inherit">
              My header
            </TypoGraphy>
            <div>
              <UserAvatar isLoggedIn={user} />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Hidden smUp>
        <BottomBar/>
      </Hidden>
    </React.Fragment>
  );
}