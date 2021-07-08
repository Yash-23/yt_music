import { Input } from '@material-ui/core';
import { useEffect } from 'react';
import { useRef } from 'react';
import useStyles from '../Styles/SearchBarStyle';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function SearchBar({ setSearchBarOn }) {
  const classes = useStyles();
  const searchInputRef = useRef();

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <div className={classes.searchContainer}>
      <span
        className={classes.searchArrowContainer}
        onClick={() => setSearchBarOn(false)}
      >
        <ArrowBackIcon className={classes.searchArrow} />
      </span>
      <input
        type='text'
        placeholder='Search'
        ref={searchInputRef}
        className={classes.searchBar}
      />
    </div>
  );
}

export default SearchBar;
