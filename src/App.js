
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Library from "./Components/Library";
import Home from "./Components/Home";
import Explore from "./Components/Explore";
import NavBar from "./Components/NavBar";

function App() {
  return (
      <Router>
        <div >
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