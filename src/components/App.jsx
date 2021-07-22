import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Search from "./Search";
import SignIn from "./SignIn";
import Navbar from "../navbar/Navbar";


function App() {
  const [auth, setAuth] = useState(false);

  const login = () => {
    setAuth(true);
  }

  const logout = () => {
    setAuth(false);
  }

  return (
    <Router>
    <Navbar isLoggedIn={auth} logout={logout} />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/search' component={() => <Search isLoggedIn={auth}/>} />
      <Route path='/signin' component={() => <SignIn isLoggedIn={auth} login={login}/>} />
    </Switch>
  </Router>
  );
}

export default App;
