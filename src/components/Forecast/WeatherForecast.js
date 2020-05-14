import React from 'react';
import Container from '@material-ui/core/Container';
import SearchBar from '../SearchBar/SearchBar';
import WeatherDisplay from '../Display/WeatherDisplay';
import { Divider } from '@material-ui/core';
import classes from './WeatherForecast.module.css';

function WeatherForecast() {
  return (
    <Container maxWidth='sm' className={classes.root}>
      <SearchBar />
      <WeatherDisplay />
    </Container>
  );
}

export default WeatherForecast;
