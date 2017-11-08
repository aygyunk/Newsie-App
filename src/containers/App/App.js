import React, { Component } from 'react';

import Navbar from 'components/Navbar';
import ArticleList from 'containers/ArticleList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <ArticleList />
      </div>
    );
  }
}

export default App;
