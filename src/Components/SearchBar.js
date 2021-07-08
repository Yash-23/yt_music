import { Input } from '@material-ui/core';
import useStyles from '../Styles/SearchBarStyle';

function SearchBar({ ref }) {
  const classes = useStyles();

  return (
    <Input
      type={'text'}
      color={'primary'}
      placeholder={'Search'}
      ref={ref}
      className={classes.searchBar}
    />
  );
}

export default SearchBar;
