import React from 'react';
import Container from '@material-ui/core/Container';
import SearchBar from '../SearchBar/SearchBar';
import WeatherDisplay from '../Display/WeatherDisplay';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

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
