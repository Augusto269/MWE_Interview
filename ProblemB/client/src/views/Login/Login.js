
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Style from './login.style'
import {loginLanguage} from './login.language'
import {loginService} from '../../services/login/login.service'
import { useState } from 'react';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/augustogodoy/">
        Augusto Godoy 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(Style) ;

export default function Login(props) {
  const classes = useStyles();
  const [pass,setPass] = useState('');
  const [user, setUser] = useState('');
  const [lang, setLang] = useState('en')

  const loginHandler = async (e) => {
      e.preventDefault();
      const loginResponse = await loginService(user, pass, lang)
      if (loginResponse.errorcode === 2000) {
        await localStorage.setItem("token", loginResponse.result);
        props.history.push("/home/", "Auth"); // Changed the route
      } else {       
        localStorage.removeItem("token");
      }
  }
  const passHandler = (e) =>{
    setPass(e.target.value)
  }
  const userHandler = (e) => {
    setUser(e.target.value)
  }
  

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>        
        <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            {loginLanguage.title}
          </Typography>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>       
          <Typography component="h3" variant="h5">
            {loginLanguage.login}
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={loginLanguage.user}
              name="email"
              autoComplete="email"
              autoFocus
              value = {user}
              onChange = {userHandler}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={loginLanguage.pass}
              type="password"
              id="password"
              autoComplete="current-password"
              value = {pass}
              onChange = {passHandler}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick= {loginHandler}
            >
             {loginLanguage.sigIn}
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    
  );
}