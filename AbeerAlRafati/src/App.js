import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/nav'
import Home from './components/Home'
import Fav from './components/Fav'
export class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/fav">
            <Fav />
          </Route>

        </Switch>
      </Router >
    )
  }
}

export default App
