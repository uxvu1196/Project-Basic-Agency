import './App.scss';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Thinking } from './pages/Thinking';
import { Contact } from './pages/Contact';

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

        <Route path="/Thinking">
          <Thinking />
        </Route>

        <Route path="/Contact">
          <Contact />
        </Route>

        {/* 

        <Route path="">
          < />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
