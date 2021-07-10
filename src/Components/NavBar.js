import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import SearchBar from './SearchBar';
import { Box, Button, IconButton, Typography, Hidden } from '@material-ui/core';
import useStyles from '../Styles/NavBarStyle';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const NavBar = () => {
  const classes = useStyles();
  const [searchBarOn, setSearchBarOn] = useState(false);

  return (
    <Box className={classes.main} display={'flex'}>
      <NavLink exact to={'/'} className={classes.logo}>
        <img className={classes.logo} src={logo} alt='Music' height='25px' />
      </NavLink>
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
            >
              <Hidden smDown>
                <Typography variant='h6'>Home</Typography>
              </Hidden>
              <Hidden mdUp>
                <Typography variant='h6'>
                  <HomeIcon />
                </Typography>
              </Hidden>
            </NavLink>
            <NavLink
              to={'/explore'}
              className={classes.link}
              activeClassName={classes.active}
            >
              <Hidden smDown>
                <Typography variant='h6'>Explore</Typography>
              </Hidden>
              <Hidden mdUp>
                <Typography variant='h6'>
                  <ExploreIcon />
                </Typography>
              </Hidden>
            </NavLink>
            <NavLink
              to={'library'}
              className={classes.link}
              activeClassName={classes.active}
            >
              <Hidden smDown>
                <Typography variant='h6'>Library</Typography>
              </Hidden>
              <Hidden mdUp>
                <Typography variant='h6'>
                  <LibraryMusicIcon />
                </Typography>
              </Hidden>
            </NavLink>
          </Box>
          <Box>
            <div
              className={classes.link}
              onClick={(e) => {
                setSearchBarOn(true);
              }}
            >
              <Hidden smDown>
                <Typography variant='h6'>
                  <Box display='flex' className={classes.searchBar}>
                    <SearchIcon />
                    Search
                  </Box>
                </Typography>
              </Hidden>
              <Hidden mdUp>
                <Typography variant='h6'>
                  <SearchIcon />
                </Typography>
              </Hidden>
            </div>
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
