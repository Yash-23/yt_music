import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Library from "./Library";
import Home from "./Home";
import Explore from "./Explore";

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
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
            </ul>
          </nav>

          <Switch>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/library">
              <Library />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>


  );
}


export default App;