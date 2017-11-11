import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Navbar from 'components/Navbar';
import TechPage from 'containers/TechPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Redirect exact path="/" to="/tech" />
          <Route path="/tech" component={TechPage} />
        </div>
      </Router>
    );
  }
}

export default App;
