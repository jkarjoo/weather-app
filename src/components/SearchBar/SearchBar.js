import React from 'react';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import classes from './SearchBar.module.css';

const SearchBar = (props) => {
  const { inputHandler, submitHandler } = props;
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <Paper className={classes.root}>
        <InputBase
          placeholder='Zip Code/City'
          autoFocus
          className={classes.input}
          onChange={(e) => inputHandler(e.target.value)}
          value={props.input}
        />
        <Divider orientation='vertical' className={classes.divider} />
        <IconButton type='submit'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </form>
  );
};

export default SearchBar;
