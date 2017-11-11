import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Navbar from 'components/Navbar';
import MusicPage from 'containers/MusicPage';
import SportsPage from 'containers/SportsPage';
import TechPage from 'containers/TechPage';
import WorldPage from 'containers/WorldPage';
import GamingPage from 'containers/GamingPage';
import EnvironmentPage from 'containers/EnvironmentPage';
import BusinessPage from 'containers/BusinessPage';
import EntertainmentPage from 'containers/EntertainmentPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Redirect exact path="/" to="/tech" />

          <Route path="/music" component={MusicPage} />
          <Route path="/gaming" component={GamingPage} />
          <Route path="/environment" component={EnvironmentPage} />
          <Route path="/sports" component={SportsPage} />
          <Route path="/tech" component={TechPage} />
          <Route path="/world" component={WorldPage} />
          <Route path="/business" component={BusinessPage} />
          <Route path="/entertainment" component={EntertainmentPage} />
        </div>
      </Router>
    );
  }
}

export default App;
