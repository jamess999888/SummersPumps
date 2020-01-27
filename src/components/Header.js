import React from 'react';
import 'typeface-roboto';
import {Typography, Paper} from '@material-ui/core'
import Image from '../Pump-Truck-1.png';
import { Grid, Button } from '@material-ui/core';

const styles = {
    paperContainer: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)), url(${Image})`,
        backgroundSize: `100%`
    },
    typography: {
        paddingTop: `8rem`,
        paddingBottom: `2rem`,
        letterSpacing: `0.5rem`,
        fontFamily: `Montserrat`,
        color: `rgb(255,255,255)`
    }
  };

class Header extends React.Component {
    
    render() {
       return (
          
      
        <Paper style={styles.paperContainer}>
            <Typography style={styles.typography} variant='h1' align='center' >
                Summers Pumps
            </Typography>
            <Grid>
                <Grid container justify="center" spacing={2}>
                    <Grid key={0} item>
                        {/* <Paper style={styles.paper}>
                            <Typography>Contact us</Typography>
                        </Paper> */}
                        <Button variant="contained" color="primary">Contact Us</Button>
                    </Grid>
                    <Grid key={1} item>
                        <Button variant="contained" color="primary">Plugging Abandoned Wells</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
       );
    }
 }

 export default Header;