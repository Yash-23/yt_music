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
import NavBar from "./NavBar";

function App() {
  return (
      <Router>
        <div>
          <NavBar/>
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