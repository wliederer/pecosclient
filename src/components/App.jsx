import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from "./Home";
import Social from "./Social";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/social'} className="nav-link">Social</Link></li>
          </ul>
          </nav>
          <hr/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/social" component={Social}/>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
