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

  // document.getElementById('searchBarInput').addEventListener('focusout', () => {
  //   setSearchBarOn(false);
  // });

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
        id='searchBarInput'
        onBlur={() => setSearchBarOn(false)}
      />
    </div>
  );
}

export default SearchBar;
