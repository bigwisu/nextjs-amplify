import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import NextLink from '../../src/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import Router from 'next/router';
import Page from '../../layouts/auth';
import useForm from '../../lib/useForm';

import Auth from '@aws-amplify/auth';
import CognitoConfig from '../../configs/cognito';
Auth.configure(CognitoConfig);

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const { values, handleChange, handleSubmit } = useForm(login);

  function login() {
    Auth.signIn(values).then(()=>{
      Router.push('/')
    }).catch((response)=>{
      if (response.message){
        console.log(response.message)
        // this.setState({
        //   message: response.message
        // })
      }
    })
  }

  const classes = useStyles();

  return (
    <React.Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <Page>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={ handleChange }
            value={ values.username || ''  }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={ handleChange }
            value={ values.password || '' }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <NextLink href="#">
                Forgot password?
              </NextLink>
            </Grid>
            <Grid item>
              Don't have an account?
              <NextLink href="/auth/signup">
                {" Sign Up"}
              </NextLink>
            </Grid>
          </Grid>
        </form>
      </Page>
    </React.Fragment>
  );
}