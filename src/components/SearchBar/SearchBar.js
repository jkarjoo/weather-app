import React from 'react';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    marginLeft: 16,
    padding: 15,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
  },
});

function SearchBar() {
  const classes = useStyles();
  return (
    <form>
      <Paper className={classes.root}>
        <InputBase
          placeholder='Zip Code/City'
          autoFocus
          className={classes.input}
        />
        <Divider orientation='vertical' className={classes.divider} />
        <IconButton type='submit'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </form>
  );
}

export default SearchBar;
