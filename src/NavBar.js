import React from 'react';
import {Link} from "react-router-dom";
import logo from "./logo.svg";
import {AppBar, Button, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));



const NavBar = () => {
        const classes = useStyles();
    return(
        <AppBar color={"transparent"} style={{backgroundColor:"black"}}>
        <Toolbar>
        <nav >
            <Link to={"/"}>
                <img src={logo}/>
            </Link>

                    <Link to={"/"} style={{ textDecoration: 'none'}}>
                    <Button size="small" style={{border:'none',color:'white'}} className={classes.margin} >
                        Home
                    </Button>
                    </Link>


                <Link to="/explore" style={{ textDecoration: 'none'}}>
                    <Button size="small" style={{border:'none',color:'white'}} className={classes.margin}>
                        Explore
                    </Button></Link>

                <Link to="/library" style={{ textDecoration: 'none'}}>
                    <Button size="small" style={{border:'none',color:'white'}} className={classes.margin}>
                        Library
                    </Button></Link>

        </nav>
            <Button  style={{border:'none',color:'white'}}><SearchIcon></SearchIcon> Search </Button>
        </Toolbar>
        </AppBar >
    )
}

export default NavBar;