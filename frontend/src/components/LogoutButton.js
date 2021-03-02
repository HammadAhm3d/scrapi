import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PowerSettingsNewSharpIcon from '@material-ui/icons/PowerSettingsNewSharp';

const LogoutButton = (props) => {
    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
    
     const classes = useStyles();
    return (
    <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<PowerSettingsNewSharpIcon />}
        onClick={(props) => props.handleClick}
      >
        Logout
      </Button>
    );
}

export default LogoutButton;


  