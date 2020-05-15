import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import SearchBar from '../SearchBar/SearchBar';
import WeatherDisplay from '../Display/WeatherDisplay';
import classes from './WeatherForecast.module.css';

class WeatherForecast extends Component {
  state = {
    searchInput: '',
    loading: false,
    dataLoaded: false,
    unit: 'F',
    weather: {
      city: '',
      country: '',
      feelsLike: '',
      temp: '',
      highTemp: '',
      lowTemp: '',
      humidity: '',
      weatherMain: '',
      weatherDescription: '',
      windDegree: '',
      windSpeed: '',
      weatherID: '',
      timezone: '',
    },
  };

  render() {
    const inputHandler = (value) => {
      this.setState({ searchInput: value });
    };

    const fetchWeather = async (input) => {
      this.setState({ dataLoaded: false, loading: true });
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=0a9172422d10d575215bede9fab1503e`,
        { mode: 'cors' }
      );
      const data = await response.json();
      this.setState({
        weather: {
          city: data.name,
          country: data.sys.country,
          feelsLike: data.main.feels_like,
          temp: data.main.temp,
          highTemp: data.main.temp_max,
          lowTemp: data.main.temp_min,
          humidity: data.main.humidity,
          weatherMain: data.weather[0].main,
          weatherDescription: data.weather[0].description,
          weatherID: data.weather[0].id,
          windDegree: data.wind.deg,
          windSpeed: data.wind.speed,
          timezone: data.timezone,
        },
      });
      this.setState({ dataLoaded: true, loading: false });
    };

    const submitHandler = (e) => {
      e.preventDefault();
      fetchWeather(this.state.searchInput);
    };

    const changeUnitHandler = (newUnit) => {
      this.setState({ unit: newUnit });
    };

    return (
      <Container maxWidth='sm' className={classes.root}>
        <SearchBar
          inputHandler={inputHandler}
          submitHandler={submitHandler}
          input={this.state.searchInput}
        />
        {this.state.dataLoaded ? (
          <WeatherDisplay
            weather={this.state.weather}
            unit={this.state.unit}
            changeUnitHandler={changeUnitHandler}
          />
        ) : null}
      </Container>
    );
  }
}

export default WeatherForecast;
