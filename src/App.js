import './App.scss';
import { Navbar } from './components/Navbar';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import { Home } from './pages/Home';
import { Work } from './pages/Work';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/Work">
          <Work />
        </Route>

        {/* <Route path="">
          <Users />
        </Route>

        <Route path="">
          < />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
