import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import PokemonDetail from './pages/PokemonDetail';

import Home from './pages/Home';
import Moves from './pages/Moves';
import Forms from './pages/Forms';
import Items from './pages/Items';
import TypeCharts from './pages/Typecharts';
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
              <Route path="/items/"><Items /></Route>
              <Route path="/typecharts/"><TypeCharts /></Route>
              <Route exact path="/pokemon/:pokemonName/"><PokemonDetail /></Route>
            </Switch>
          </Router>
        </div>
    </Provider>
  );
}

export default App;
