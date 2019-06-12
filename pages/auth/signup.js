import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import NextLink from '../../src/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import Head from 'next/head';

import Page from '../../layouts/auth';
import useForm from '../../lib/useForm';

import Amplify, { Auth } from 'aws-amplify';
import CognitoConfig from '../../configs/cognito';


Amplify.configure(CognitoConfig);

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const { values, handleChange, handleSubmit } = useForm(singup);

  function singup() {
    const { username, password, email, phone_number } = values;
    Auth.signUp({
      username,
      password,
      attributes: {
        email,             // optional
        phone_number,      // optional - E.164 number convention
        // Other custom attributes...
      },
      validationData: [],  // optional
      })
      .then(data => {
        Router.push('/')
      })
      .catch((response)=>{
        console.log(response);
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
        <title>Sign up</title>
      </Head>
      <Page>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                onChange={ handleChange }
                value={ values.username || ''  }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={ handleChange }
                value={ values.password || ''  }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={ handleChange }
                value={ values.email || ''  }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="phone_number"
                variant="outlined"
                required
                fullWidth
                id="phone_number"
                label="Mobile phone"
                autoFocus
                onChange={ handleChange }
                value={ values.phone_number || ''  }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              Already have an account?
              <NextLink href="/auth/login">
                {" Sign in"}
              </NextLink>
            </Grid>
          </Grid>
        </form>
      </Page>
    </React.Fragment>
  );
}