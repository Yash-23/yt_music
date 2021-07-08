import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Library from './Components/Library';
import Home from './Components/Home';
import Explore from './Components/Explore';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/explore'>
            <Explore />
          </Route>
          <Route path='/library'>
            <Library />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
