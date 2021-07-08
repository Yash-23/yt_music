import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Library from './Components/Library';
import Home from './Components/Home';
import Explore from './Components/Explore';
import NavBar from './Components/NavBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  const theme = createMuiTheme({
    typography: {
      h6: {
        fontFamily: [
          'Roboto',
          'Noto Naskh Arabic UI',
          'Arial',
          'sans-serif',
        ].join(','),
        fontWeight: '500',
      },
    },
    pallete: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
