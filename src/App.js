import { Switch, Route, useLocation } from 'react-router-dom';
import Library from './Components/Library';
import Home from './Components/Home';
import Explore from './Components/Explore';
import NavBar from './Components/NavBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import LoadingBar from 'react-top-loading-bar';
import { useEffect, useRef } from 'react';

function App() {
  const loaderRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    handleLoadSomething();
  }, [location]);

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

  function handleLoadSomething() {
    loaderRef.current.continuousStart();
    setTimeout(() => {
      loaderRef.current.complete();
    }, 200);
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <LoadingBar ref={loaderRef} color='#f00000' />
        <NavBar />

        <Switch>
          <Route exact path='/' component={Home}></Route>

          <Route path='/explore' component={Explore}></Route>

          <Route path='/library' component={Library}></Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
