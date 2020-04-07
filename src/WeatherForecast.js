import React from 'react';
import Container from '@material-ui/core/Container';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingTop: 50,
  },
});

function WeatherForecast() {
  const classes = useStyles();
  return (
    <Container maxWidth='sm' className={classes.root}>
      <SearchBar />
      <WeatherDisplay />
    </Container>
  );
}

export default WeatherForecast;
