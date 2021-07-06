import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.svg";
import SearchBar from "./SearchBar";
import {Box, Button, IconButton, Typography} from "@material-ui/core";
import useStyles from "../Styles/NavBarStyle"
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const NavBar = () => {
    const classes = useStyles();
    const [searchBarOff, setSearchBarOff] = useState(false);

    return (
    <Box className={classes.main} display={"flex"}>
        <Link to={"/"} className={classes.logo}>
            <img className={classes.logo} src={logo} alt="Music" height="25px"/>
        </Link>
        {searchBarOff ? (
            <SearchBar/>
        ) : (
            <Box className={classes.navItems} display={"flex"}>
                <Box display={"flex"}>
                    <Link to={"/"} underline="none">
                        <Typography variant="h6">Home</Typography>
                    </Link>
                    <Link to={"/explore"} underline="none">
                        <Typography variant="h6">Explore</Typography>
                    </Link>
                    <Link to={"library"} underline="none">
                        <Typography variant="h6">Library</Typography>
                    </Link>
                </Box>
                <Box>
                    <Link
                        underline="none"
                        onClick={(e) => {
                            setSearchBarOff(true)
                        }}
                    >
                        <Typography variant="h6">
                            <Box display="flex" className={classes.searchBar}>
                                <SearchIcon/>
                                Search
                            </Box>
                        </Typography>
                    </Link>
                </Box>
            </Box>
        )}
        <Box className={classes.boxEnd}>
            <IconButton color="primary" aria-label="more options">
                <MoreVertIcon />
            </IconButton>
            <Button variant="contained" color="primary" size="small">
                SIGN IN
            </Button>
        </Box>
    </Box>
    )
}
export default NavBar;