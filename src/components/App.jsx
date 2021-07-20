import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from "./Home";
import Social from "./Social";
import Search from "./Search";
import SignUp from "./SignUp";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/social' component={Social} />
      <Route path='/search' component={Search} />
      <Route path='/signin' component={SignUp} />
    </Switch>
  </Router>
  );
}

export default App;
