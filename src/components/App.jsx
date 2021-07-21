import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Social from "./Social";
import Search from "./Search";
import SignIn from "./SignIn";
import Navbar from "./Navbar";
import SignUp from "./SignUp";

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      {/* <Route path='/social' component={Social} /> */}
      <Route path='/search' component={Search} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
    </Switch>
  </Router>
  );
}

export default App;
