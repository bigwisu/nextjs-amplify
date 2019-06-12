import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  shadows: Array(25).fill("none"),
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f5f5f5',
    }
  }
  // props: {
  //   MuiButtonBase: {
  //     disableRipple: true
  //   },
  // },
});

export default theme;
