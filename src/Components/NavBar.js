import React, { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import SearchBar from './SearchBar';
import { Box, Button, IconButton, Typography } from '@material-ui/core';
import useStyles from '../Styles/NavBarStyle';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const NavBar = () => {
  const classes = useStyles();
  const [searchBarOn, setSearchBarOn] = useState(false);

  return (
    <Box className={classes.main} display={'flex'}>
      <Link to={'/'} className={classes.logo}>
        <img className={classes.logo} src={logo} alt='Music' height='25px' />
      </Link>
      {searchBarOn ? (
        <SearchBar setSearchBarOn={setSearchBarOn} />
      ) : (
        <Box className={classes.navItems} display={'flex'}>
          <Box display={'flex'}>
            <NavLink
              to={'/'}
              exact
              className={classes.link}
              activeClassName={classes.active}
              //   onClick={() => searchInputRef.current.focus()}
            >
              <Typography variant='h6'>Home</Typography>
              {/* <input type='text' ref={searchInputRef} /> */}
            </NavLink>
            <NavLink
              to={'/explore'}
              className={classes.link}
              activeClassName={classes.active}
            >
              <Typography variant='h6'>Explore</Typography>
            </NavLink>
            <NavLink
              to={'library'}
              className={classes.link}
              activeClassName={classes.active}
            >
              <Typography variant='h6'>Library</Typography>
            </NavLink>
          </Box>
          <Box>
            <Link
              className={classes.link}
              onClick={(e) => {
                setSearchBarOn(true);
              }}
            >
              <Typography variant='h6'>
                <Box display='flex' className={classes.searchBar}>
                  <SearchIcon />
                  Search
                </Box>
              </Typography>
            </Link>
          </Box>
        </Box>
      )}
      <Box className={classes.boxEnd}>
        <IconButton color='primary' aria-label='more options'>
          <MoreVertIcon style={{ color: 'white' }} />
        </IconButton>
        <Button
          variant='contained'
          style={{ backgroundColor: 'white' }}
          size='small'
        >
          SIGN IN
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;
