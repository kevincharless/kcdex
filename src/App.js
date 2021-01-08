import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import PokemonDetail from './pages/PokemonDetail';

import Home from './pages/Home/index';
import Moves from './pages/Moves/index';
import Forms from './pages/Forms/index';
import Stats from './pages/Stats/index';
import TypeCharts from './pages/Typecharts/index';
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Router>
            <Switch>
              <Redirect exact from='/' to="/pokemon/" />
              <Route exact path="/pokemon/"><Home /></Route>
              <Route path="/moves/"><Moves /></Route>
              <Route path="/forms/"><Forms /></Route>
              <Route path="/stats/"><Stats /></Route>
              <Route path="/typecharts/"><TypeCharts /></Route>
              <Route exact path="/pokemon/:pokemonName/"><PokemonDetail /></Route>
            </Switch>
          </Router>
        </div>
    </Provider>
  );
}

export default App;
