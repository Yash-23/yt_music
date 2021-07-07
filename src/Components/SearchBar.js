import {Input} from "@material-ui/core";
import useStyles from "../Styles/SearchBarStyle";

const SearchBar = () => {
    const classes = useStyles();

    return (
      <Input type={"text"} color={"primary"} className={classes.searchBar} />
    )
}
export default SearchBar;