import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import {auth} from '../firebase';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios'
import {useState} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import circle from './circle.png';
import betacell from './betacell.jpeg';
import ImageMapper from 'react-img-mapper';    

function Disclaimer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Disclaimer: (Kalhor et al., 2011: Xu et al., 2015) (Jeong et al., 2001; Liu et al., 2012; Sali et al., 2015: Song et al., 2017; Yang et al., 2015)'}
    </Typography>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const hardLinks = [
    "https://github.com/", "https://www.facebook.com/", "https://www.google.com/",
    "https://www.youtube.com/", "https://twitter.com/",
]; 

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function Home() {
    const [links, setlinks] = useState([]);
    const [input, setinput] = useState('');
    const [loading,setloading]=useState(false)

    const[msg, setMsg] = useState(null);
    const[getId, setId] = useState(-1);

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
        // const res=await axios.post("http://localhost:5000/links",body,config)
        // console.log(res.data);
        // if(res.data.success){
        //     setlinks(res.data.links)
        //     console.log(links)
        //     setloading(false)
        // }

        // axios.post("http://localhost:5000/links",body,config)
        axios.post("https://scrapi-mern.herokuapp.com//links",body,config)
        .then(res => {
            setlinks(res.data.links)
            console.log(links)
            setloading(false)
        })
        .catch(e => {
          console.log(e.message);
        })
        .finally(() =>{
          setloading(false);
        })
       
        
        
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

    const handleClick = (id) => {
      setId(id);
      setMsg(id);
    }

    const handleLinkClick = (row, col) => {
      // alert(`${categories[row][col]} is clicked!!`);
      getlinks(categories[row][col]);
    }

    const categories = [
  
          [
            "Fluorescent imaging",
            "super-resolution imaging",
            "live imaging"
          ],
        ["X-ray Tomography"],
        ["cryo electron microscope"],
      
          [ 
            "genome architecture mapping",
            "Hi-C maps",
            "fluorescent in-situ hybridization"
          ],
        ["integrative structure modeling"],
          [
          "protein structure determination",
            "X-ray crystallography",
            "electron microscope",
            "nuclear magnetic resonance spectroscopy"
          ],

            [
            "omics",
            "proteomics",
            "transcriptomics",
            "metabolomics",
            "genomics",
            "lipidomics"
          ],

        ["computational systems biology"],
        ["molecular graphics"]
      
    ]
    const MAP = { 
      name: "my-map",
      areas: [
        { id: 0, shape: "circle", coords: [119, 223, 55],},
      { id: 1, shape: "circle", coords: [182, 130, 55], },
      { id: 2, shape: "circle", coords: [293, 103, 55], },
      { id: 3, shape: "circle", coords: [398, 148, 55], },
      { id: 4, shape: "circle", coords: [449, 247, 55], },
      { id: 5, shape: "circle", coords: [418, 353, 55], },
      { id: 6, shape: "circle", coords: [325, 415, 55], },
      { id: 7, shape: "circle", coords: [212, 407, 55], },
      { id: 8, shape: "circle", coords: [131, 331, 55], },
      

    ]
  };

 
    return (
        <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                Web Scrapper
            </Typography>
            <nav>
                <Link  variant="button" color="textPrimary" underline="always" href="#" className={classes.link}
                >
                Home
                </Link>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Services
                </Link>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                About us
                </Link>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Contact us
                </Link>
            </nav>
            <Button
                    variant="outlined" color="primary"
                    className={classes.link}
                    // className={classes.button}
                    startIcon={<PowerSettingsNewIcon />}
                    onClick={() => auth.signOut()}
                    >
                    Logout
                    </Button>
            </Toolbar>
        </AppBar>
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <div className={classes.centered}> 
      
      I<ImageMapper 
        src={circle} 
        map={MAP} 
        strokeColor="#0099ff" 
        lineWidth="2"
        width="550"
        height="500"
        onClick={(area)=>handleClick(area.id)}

        />
        <Box mt={5}>
            <Disclaimer />
            </Box>
        {msg !==null? <div className={classes.list}>
                    <List 
                    component="nav" 
                    aria-label="secondary mailbox folders"
                    >
                    {categories[getId].map((value, index) => {
                        return (
                            <ListItemLink style={{backgroundColor: '#ccebff', margin: 5}}
                            onClick={()=>handleLinkClick(getId, index)}>
                                <ListItemText primary={(index + 1) + " " + value} />
                            </ListItemLink>
                        )
                    })}
                    </List>
                    </div> : null}
        
        </div>
        
        </Container>

        <Container maxWidth="sm" component="main" className={classes.heroContent}>
        {/* <div className={classes.centered}>
                    <form  noValidate autoComplete="off" onSubmit={(e) => onSubmit(e)}>
                        <TextField id="outlined-basic" label="enter keyword " variant="outlined" onChange={(e) => onChange(e)} />
                        
                    </form>
        </div> */}
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
        </Container>
        {/* End hero unit */}
        
        {/* Footer */}
        <Container maxWidth="md" component="footer" className={classes.footer}>
            <Grid container spacing={4} justify="space-evenly">
            {footers.map((footer) => (
                <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                    {footer.title}
                </Typography>
                <ul>
                    {footer.description.map((item) => (
                    <li key={item}>
                        <Link href="#" variant="subtitle1" color="textSecondary">
                        {item}
                        </Link>
                    </li>
                    ))}
                </ul>
                </Grid>
            ))}
            </Grid>
            <Box mt={5}>
            <Copyright />
            </Box>
        </Container>
        {/* End footer */}
        </React.Fragment>
    );
}