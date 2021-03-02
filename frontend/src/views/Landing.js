import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import betacell from './betacell.jpeg';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import exp from './exp.jpeg'


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

function Landing() {


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

      const classes = useStyles();

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

      const history = useHistory();

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
                    startIcon={<PowerSettingsNewIcon />}
                    onClick={() => history.push('/login')}
                    >
                    Login
                    </Button>
            </Toolbar>
        </AppBar>

        <Container maxWidth="md">
            <Box mt={5}>
            <Typography variant="h3" color="inherit">
                Human Beta Cell
            </Typography>
            <Box mt={3} style={{display: 'flex', flexDirection: 'row'}}>
                <Typography variant="body1"> 
                Beta cells are cells that make insulin, a hormone that controls the level of glucose (a type of sugar) in the blood. Beta cells are found in the pancreas within clusters of cells known as islets. In type 1 diabetes, the body's immune system mistakenly destroys the beta cells.
                Beta-cell replacement represents the optimal therapy for type 1 diabetes. Efforts to manipulate β-cell proliferation and differentiation could be advanced by a better understanding of the normal pathways regulating β-cell development and renewal. NOTCH signaling is a highly conserved pathway which plays a central role in pancreas development. Cell-lineage tracing has revealed the reactivation of the NOTCH pathway in adult human β cells cultured under conditions which induce cell proliferation and dedifferentiation. Inhibition of NOTCH signaling in dedifferentiated cells following ex vivo expansion has been shown to promote restoration of the β-cell phenotype. This approach may increase the availability of functional β cells for transplantation.
                </Typography>
                <Box>
                    <img src={betacell} width='400' height='400'/>
                    <Typography variant="caption" color="inherit">
                        Human Beta Cell
                    </Typography>
                </Box>
            </Box>

            <Typography variant="h3" color="inherit">
                Beta Cell Expansion
            </Typography>
                <Box mt={3}>
                    <img src={exp} width='500' />
                    <Typography variant="caption" color="inherit">
                        Human Beta Cell
                    </Typography>
                </Box>
            </Box>
            
            
        </Container>

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

export default Landing;
