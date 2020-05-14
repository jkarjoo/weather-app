import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';
import WeatherIcon from '../Icon/WeatherIcon';
import water from '../../assets/water.svg';
import wind from '../../assets/wind.svg';
import classes from './WeatherDisplay.module.css';
import WeatherControls from '../Controls/WeatherControls';
import Location from '../Location/Location';
import Temperature from '../Temperature/Temperature';

function WeatherDisplay(props) {
  const {
    weather: {
      city,
      country,
      feelsLike,
      temp,
      highTemp,
      lowTemp,
      humidity,
      weatherMain,
      weatherDescription,
      windDegree,
      windSpeed,
      weatherID,
    },
    unit,
    changeUnit,
  } = props;

  const convertTemp = (temp) => {
    if (unit === 'C') {
      return Math.round(temp - 273.15);
    } else {
      return Math.round(((temp - 273.15) * 9) / 5 + 32);
    }
  };

  const convertWindSpeed = (speed) => {
    return Math.round(speed * 2.236936);
  };

  const convertWindDirection = (speed) => {
    const val = Math.round(speed / 22.5 + 0.5);
    const arr = [
      'N',
      'NNE',
      'NE',
      'ENE',
      'E',
      'ESE',
      'SE',
      'SSE',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW',
    ];
    return arr[val % 16];
  };

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container>
          <Grid item xs={8} className={classes.topBar}>
            <Location city={city} country={country} />
          </Grid>
          <Grid item xs={4} align='right' className={classes.topRightBar}>
            <WeatherControls unit={unit} changeUnit={changeUnit} />
          </Grid>
          <Divider variant='middle' className={classes.divider} />
          <Grid item xs={8} className={classes.main}>
            <h1>April 14th, 2020</h1>
            <h2>7:07 PM</h2>
            <span>{weatherDescription}</span>
            <span>
              Feels like: {convertTemp(feelsLike)}°{unit}
            </span>
          </Grid>
          <Grid item xs={4} className={classes.temp}>
            <WeatherIcon />
            <Temperature
              temp={convertTemp(temp)}
              high={convertTemp(highTemp)}
              low={convertTemp(lowTemp)}
              unit={unit}
            />
          </Grid>
          <Divider variant='middle' className={classes.mainDivider} />
          <Grid item xs={6} className={classes.iconContainer}>
            <img src={water} alt='' className={classes.icon}></img>
            <h4>Humidity</h4>
            <span>{humidity}%</span>
          </Grid>
          <Grid item xs={6} className={classes.iconContainer}>
            <img src={wind} alt='' className={classes.icon}></img>
            <h4>Wind</h4>
            <span>
              {convertWindSpeed(windSpeed)} mph{' '}
              {convertWindDirection(windDegree)}
            </span>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default WeatherDisplay;
