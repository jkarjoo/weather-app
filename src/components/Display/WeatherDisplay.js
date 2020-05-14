import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';
import WeatherIcon from '../Icon/WeatherIcon';
import water from '../../assets/water.svg';
import wind from '../../assets/wind.svg';
import classes from './WeatherDisplay.module.css';

function WeatherDisplay(props) {
  return (
    <div className={classes.root}>
      <Paper>
        <Grid container>
          <Grid item xs={8} className={classes.topBar}>
            <h4>{props.input}</h4>
          </Grid>
          <Grid item xs={4} align='right' className={classes.topRightBar}>
            <ButtonGroup variant='text' aria-label='text primary button group'>
              <Button className={classes.bold}>C°</Button>
              <Button className={classes.bold}>F°</Button>
            </ButtonGroup>
          </Grid>
          <Divider variant='middle' className={classes.divider} />
          <Grid item xs={8} className={classes.main}>
            <h1>April 14th, 2020</h1>
            <h2>7:07 PM</h2>
            <span>Clear Sky</span>
            <span>Feels like: 48° F</span>
          </Grid>
          <Grid item xs={4} className={classes.temp}>
            <WeatherIcon></WeatherIcon>
            <h1>44°F</h1>
            <span>High: 61°</span>
            <span>Low: 23°</span>
          </Grid>
          <Divider variant='middle' className={classes.mainDivider} />
          <Grid item xs={6} className={classes.iconContainer}>
            <img src={water} alt='' className={classes.icon}></img>
            <h4>Humidity</h4>
            <span>72%</span>
          </Grid>
          <Grid item xs={6} className={classes.iconContainer}>
            <img src={wind} alt='' className={classes.icon}></img>
            <h4>Wind</h4>
            <span>7 km/h NW</span>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default WeatherDisplay;
