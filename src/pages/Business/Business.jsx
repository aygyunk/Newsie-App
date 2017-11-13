import React, { Component } from 'react';

import Page from 'components/Page';
import ArticleList from 'containers/ArticleList';
import Articles from 'modules/Articles';

class Business extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    Articles.fetch({
      source: 'the-wall-street-journal',
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

export default Business;
