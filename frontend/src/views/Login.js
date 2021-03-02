import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import {auth, firestore} from '../firebase';
import { useHistory } from 'react-router-dom';


import {useStyles} from '../components/Styles';

const Login = (props) => {


    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[emailError, setEmailError] = useState(null);
    const[passwordError, setPasswordError] = useState(null);
    const[isUpdated, setIsUpdated] = useState(false);
    const[isLoading, setIsLoading] = useState(false);

    const classes = useStyles();

    const history = useHistory();

    const login = () => {

        let isValid = true;
        setEmailError(null);
        setPasswordError(null);
        console.log(email)
        if (email === "") {
            setEmailError("*required")
            isValid = false;
            }
        if (password === "") {
            setPasswordError("*required");
            isValid = false;
            }
        setIsUpdated(true);

        if(isValid) {
            setIsLoading(true);
            firestore.collection("users")
            .where('email', '==', email)
            .where('isAdmin', '==', true)
            .get()
            .then(querySnapshot => {
                if (!querySnapshot.empty) {

                    auth.signInWithEmailAndPassword(email, password)
                    .then(res => {
                      history.push('/')
                    })
                    .catch(error => {
                      if (error.code == 'auth/wrong-password')
                        setPasswordError("Incorrect Password!");
                    })
                    setIsLoading(false);
                }
                else{
                    setEmailError("Email not found!");
                    setIsLoading(false);
                }
                
            })
        }
        
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            error={emailError != null}
            helperText={emailError}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            error={passwordError != null}
            helperText={passwordError}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          {isLoading ? <div className={classes.progressBar}>
            <LinearProgress />
            <LinearProgress color="secondary" />
            </div> : null }
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => login()}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
export default Login;


