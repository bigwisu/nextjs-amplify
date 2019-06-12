import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';

import Amplify, { Auth } from 'aws-amplify';
import CognitoConfig from '../configs/cognito';
Amplify.configure(CognitoConfig);

const StyledAvatar = withStyles({
  root: {
    color: '#fff',
    backgroundColor: deepOrange[500],
  }
})(Avatar);

const StyledButton= withStyles({
  root: {
    "&:hover": {
        backgroundColor: "transparent"
    }
  }
})(IconButton);

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const logOut = () => {
  Auth.signOut()
    .then(data => {
      window.location.href = '/';
    })
    .catch(err => console.log(err));
}

export default function HeaderLogin() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [initials, setInitials] = useState();

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: true 
    }).then(cognitoUser => {
      setInitials(cognitoUser.username.substring(0, 1).toUpperCase());
    })
    .catch(err => {
      setUser(false);
    });
  }, []);

  return (
      <React.Fragment>
        <StyledButton
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <StyledAvatar>{ initials }</StyledAvatar>
        </StyledButton>
        <StyledMenu
          id="profile-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem>
            <ListItemText primary="Profile" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText primary="Account" />
          </StyledMenuItem>
          <StyledMenuItem button onClick={logOut} >
            <ListItemText primary="Logout" />
          </StyledMenuItem>
        </StyledMenu>
      </React.Fragment>
  );
}