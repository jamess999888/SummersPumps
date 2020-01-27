import React, {Component} from 'react';
import './App.css';
import 'typeface-roboto';
import Header from './components/Header'
import { Grid, Typography, Card, CardContent, CardActionArea, CardActions, CardMedia, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PumpTruck from './Pump-Truck-1.png';
import WellPump from './wellPump.jpg'
import Filtration from './Video-Water-Filters-ex.jpg'
import TurnKey from './turnkey.png'

const styles = {
  aboutUsImage: {
    backgroundImage: `url(${PumpTruck})`,
    height: `100%`,
    backgroundRepeat: `no-repeat`
  },
  wellPumpImage: {
    backgroundImage: `url(${WellPump})`,
    height: 140
  },
  filtrationImage: {
    backgroundImage: `url(${Filtration})`,
    height: 140
  },
  turnKeyImage: {
    backgroundImage: `url(${TurnKey})`,
    height: 140
  },
  headerGrid: {
    paddingBottom: `2rem`
  },
  typography: {
    fontFamily: `Montserrat`
  },
  aboutUsText: {
    height: `100%`
  },
  aboutUs:{
    paddingBottom: `2rem`,
    padding: `5rem`
  }
};

class App extends Component {
  state = {    exercises: [],    title: ''  }

  handleChange = ({ target: { name, value } }) => 
        this.setState({
                [name]: value
        })

        
  
  render() {
    const { title } = this.state

    return (
      <Grid>
        <Grid style={styles.headerGrid}>
          <Header />
        </Grid>
        
        <Grid container style={styles.aboutUs} spacing={10}>
          <Grid key={0} item xs={6}>
            <div style={styles.aboutUsImage}></div>
          </Grid>
          <Grid key={2} item xs={3}>
            <Typography style={styles.typography, styles.aboutUsText} align='center'>
              After buying a well drilling business in 1999, we are now expanding into the sales and service of pump systems. This is a true family business, as father, mother, sons and wives are all involved in various parts of this business. We still choose to be of ‘good character’ and ‘do things right’. Customer satisfaction is our primary goal.
            </Typography>
          </Grid>
      </Grid>
      <Grid container justify="center" spacing={2}>
        <Grid key={0} item>
          <Card raised={true}>
            <CardActionArea>
              <CardMedia
                component="img"
                style={styles.wellPumpImage}
              />
              <CardContent>
                <Typography  style={styles.typography} variant='h4' align='center' gutterBottom>
                  Pump Systems
                </Typography>
                <Typography  style={styles.typography} align='center' gutterBottom>
                  New construction as well as servicing existing pump systems.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid key={1} item>
        <Card raised={true}>
          <CardActionArea>
              <CardMedia
                component="img"
                style={styles.filtrationImage}
              />
          <CardContent>
          <Typography  style={styles.typography} variant='h4' align='center' gutterBottom>
            Filtration Systems
          </Typography>
          <Typography  style={styles.typography} align='center' gutterBottom>
            Which filtration system is best for you?
          </Typography>
          </CardContent>
          </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
        </Card>
        </Grid>
        
        <Grid key={2} item>
        <Card raised={true}>
          <CardActionArea>
            <CardMedia
              component="img"
              style={styles.turnKeyImage}
              />
          <CardContent>
          <Typography  style={styles.typography} variant='h4' align='center' gutterBottom>
            Turn-Key
          </Typography>
          <Typography  style={styles.typography} align='center' gutterBottom>
            We can install your pump alone, or package it with drilling your new well.
          </Typography>
          </CardContent>
          </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
        </Card>
        </Grid>
      </Grid>
    </Grid>
    )}
}

export default App;