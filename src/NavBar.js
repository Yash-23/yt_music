import {Link} from "react-router-dom";
import logo from "./logo.svg";

const NavBar = () => {
    return(
        <nav >
            <Link to={"/"}>
                <img src={logo}/>
            </Link>

            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/explore">Explore</Link>
            </li>
            <li>
                <Link to="/library">Library</Link>
            </li>
        </nav>
    )
}

export default NavBar;