import React from 'react';
import {auth} from '../firebase';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {useStyles} from '../components/Styles';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import axios from 'axios'
import {useState} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

const hardLinks = [
    "https://github.com/", "https://www.facebook.com/", "https://www.google.com/",
    "https://www.youtube.com/", "https://twitter.com/",
]; 


function Scrape() {
    const [links, setlinks] = useState([]);
    const [input, setinput] = useState('');
    const [loading,setloading]=useState(false)
    const classes = useStyles();

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    async function getlinks(input){
        const config = {
            headers: {
            "Content-Type": "application/json",
          },
        };
      
        const body = {inputt:input}
        console.log(body);
        
        setloading(true)
        const res=await axios.post("http://localhost:5000/links",body,config)
        console.log(res.data);
        if(res.data.success){
            setlinks(res.data.links)
            console.log(links)
            setloading(false)
        }
       
        
        
    }

    const onChange = (e) =>{
      
        setinput( e.target.value);
        console.log(input)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(input)

        if(input!=''){
            getlinks(input)
        }
        
        
        
        
    };
    

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.container}>
                <Button
                variant="outlined" color="primary"
                // className={classes.button}
                startIcon={<PowerSettingsNewIcon />}
                onClick={() => auth.signOut()}
                >
                Logout
                </Button>
                <h2>Search Articles:</h2>
                <h2>Search Articles:</h2>

                <div className={classes.centered}>
                    <form  noValidate autoComplete="off" onSubmit={(e) => onSubmit(e)}>
                        <TextField id="outlined-basic" label="enter keyword " variant="outlined" onChange={(e) => onChange(e)} />
                        
                    </form>
                </div>
                <br/>
                <Divider />
                <img src="../circle.png"/>
                <h2>Google Scholar Links:</h2>
                
                {loading?
                    <div className={classes.centered}>
                        <CircularProgress />
                        <CircularProgress color="secondary" />
                    </div>
                    :
                    <div className={classes.list}>
                    <List 
                    component="nav" 
                    aria-label="secondary mailbox folders"
                    >
                    {links.map((value, index) => {
                        return (
                            <ListItemLink href={value}>
                                <ListItemText primary={(index + 1) + " " + value} />
                            </ListItemLink>
                        )
                    })}
                        {/* <ListItem button>
                        <ListItemText primary="Trash" />
                        </ListItem>
                        <ListItemLink href="#simple-list">
                        <ListItemText primary="Spam" />
                        </ListItemLink> */}
                    </List>
                </div>}
                
            </div>
        </Container>

        
    )
}

export default Scrape
