import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Navbar from 'components/Navbar';
import {
  Music,
  Sports,
  Tech,
  Gaming,
  Entertainment,
  Business,
  Environment,
} from 'pages';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Redirect exact path="/" to="/tech" />

          <Route path="/music" component={Music} />
          <Route path="/gaming" component={Gaming} />
          <Route path="/environment" component={Environment} />
          <Route path="/sports" component={Sports} />
          <Route path="/tech" component={Tech} />
          <Route path="/business" component={Business} />
          <Route path="/entertainment" component={Entertainment} />
        </div>
      </Router>
    );
  }
}

export default App;
