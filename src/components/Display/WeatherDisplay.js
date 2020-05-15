import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import WeatherIcon from '../Icon/WeatherIcon';
import classes from './WeatherDisplay.module.css';
import WeatherControls from '../Controls/WeatherControls';
import Location from '../Location/Location';
import Temperature from '../Temperature/Temperature';
import Humidity from '../Humidity/Humidity';
import Wind from '../Wind/Wind';
import Description from '../Description/Description';
import Clock from '../Clock/Clock';

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
      timezone,
    },
    unit,
    changeUnitHandler,
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
            <WeatherControls
              unit={unit}
              changeUnitHandler={changeUnitHandler}
            />
          </Grid>
          <Divider variant='middle' className={classes.divider} />
          <Grid item xs={8} className={classes.main}>
            <Clock timezone={timezone} />
            <Description
              descript={weatherDescription}
              feelsLike={convertTemp(feelsLike)}
              unit={unit}
            />
          </Grid>
          <Grid item xs={4} className={classes.temp}>
            <WeatherIcon id={weatherID} />
            <Temperature
              temp={convertTemp(temp)}
              high={convertTemp(highTemp)}
              low={convertTemp(lowTemp)}
              unit={unit}
            />
          </Grid>
          <Divider variant='middle' className={classes.mainDivider} />
          <Grid item xs={6} className={classes.iconContainer}>
            <Humidity humidity={humidity} />
          </Grid>
          <Grid item xs={6} className={classes.iconContainer}>
            <Wind
              speed={convertWindSpeed(windSpeed)}
              direction={convertWindDirection(windDegree)}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default WeatherDisplay;
