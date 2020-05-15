import React, { Fragment, Component } from 'react';
import moment from 'moment';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: '',
      date: moment()
        .utc()
        .utcOffset(this.props.timezone / 3600)
        .format('MMM Do, YYYY'),
      time: moment()
        .utc()
        .utcOffset(this.props.timezone / 3600)
        .format('h:mm A'),
    };
  }

  componentDidMount() {
    this.createTimer();
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timer);
  }

  updateTimer() {
    this.setState({
      date: moment()
        .utc()
        .utcOffset(this.props.timezone / 3600)
        .format('MMM Do, YYYY'),
      time: moment()
        .utc()
        .utcOffset(this.props.timezone / 3600)
        .format('h:mm A'),
    });
  }

  createTimer = () => {
    const timer = setInterval(() => {
      this.updateTimer();
    }, 1000);
    this.setState({ timer: timer });
  };

  render() {
    return (
      <Fragment>
        <h1>{this.state.date}</h1>
        <h2>{this.state.time}</h2>
      </Fragment>
    );
  }
}

export default Clock;
