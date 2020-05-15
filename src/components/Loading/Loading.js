import React from 'react';
import classes from './Loading.module.css';

const Loading = (props) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loading;
