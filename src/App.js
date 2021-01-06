import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import PokemonDetail from './pages/pokemondetail';
import Home from './pages/home';
import Moves from './pages/moves';
import Forms from './pages/forms';
import Items from './pages/items';
import TypeCharts from './pages/typecharts';
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
              <Route path="/pokemon/:pokemonName/"><PokemonDetail /></Route>
              <Route path="/pokemon/:pokemonName/"><PokemonDetail /></Route>
            </Switch>
          </Router>
        </div>
    </Provider>
  );
}

export default App;
