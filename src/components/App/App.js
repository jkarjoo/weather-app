import React from 'react';
import WeatherForecast from '../Forecast/WeatherForecast';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.root}>
      <WeatherForecast />
    </div>
  );
}

export default App;
