import React, { Component } from 'react';

import ArticleList from 'containers/ArticleList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleList />
      </div>
    );
  }
}

export default App;
