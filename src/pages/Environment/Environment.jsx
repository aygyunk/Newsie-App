import React, { Component } from 'react';

import Page from 'components/Page';
import ArticleList from 'containers/ArticleList';
import Articles from 'modules/Articles';

class Environment extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    Articles.fetch({
      source: 'national-geographic',
      sortBy: 'top',
    }).then(articles =>
      this.setState(prevState => ({ ...prevState, articles })),
    );
  }

  render() {
    return (
      <Page>
        <ArticleList articles={this.state.articles} />
      </Page>
    );
  }
}

export default Environment;
