import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
              <Route exact path="/"><Home /></Route>
              <Route path="/moves"><Moves /></Route>
              <Route path="/forms"><Forms /></Route>
              <Route path="/items"><Items /></Route>
              <Route path="/typecharts"><TypeCharts /></Route>
            </Switch>
          </Router>
        </div>
    </Provider>
  );
}

export default App;
