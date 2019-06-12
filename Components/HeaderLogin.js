import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PersonOutline from '@material-ui/icons/PersonOutline';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import NextLink from '../src/Link';

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

export default function HeaderLogin() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
      <React.Fragment>
        <IconButton
          aria-controls="login-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <PersonOutline />
        </IconButton>
        <StyledMenu
          id="login-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <NextLink href="/auth/login">
            <StyledMenuItem>
              <ListItemText primary="Login" />
            </StyledMenuItem>
          </NextLink>
          <NextLink href="/auth/signup">
            <StyledMenuItem>
              <ListItemText primary="Signup" />
            </StyledMenuItem>
          </NextLink>
        </StyledMenu>
      </React.Fragment>
  );
}