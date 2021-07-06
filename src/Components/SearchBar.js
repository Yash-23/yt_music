import {Input} from "@material-ui/core";
import useStyles from "../Styles/NavBarStyle";

const SearchBar = () => {
    const classes = useStyles();

    return (
      <Input color={"primary"} className={classes.searchBar} />
    )
}
export default SearchBar;