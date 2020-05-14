import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import SearchBar from '../SearchBar/SearchBar';
import WeatherDisplay from '../Display/WeatherDisplay';
import classes from './WeatherForecast.module.css';

class WeatherForecast extends Component {
  state = {
    searchInput: '',
  };

  render() {
    const inputHandler = (value) => {
      this.setState({ searchInput: value });
    };

    const populateWeatherData = (input) => {
      console.log('populating');
    };

    const submitHandler = (e) => {
      e.preventDefault();
      populateWeatherData(this.state.searchInput);
    };

    return (
      <Container maxWidth='sm' className={classes.root}>
        <SearchBar
          inputHandler={inputHandler}
          submitHandler={submitHandler}
          input={this.state.searchInput}
        />
        <WeatherDisplay input={this.state.searchInput} />
      </Container>
    );
  }
}

export default WeatherForecast;
