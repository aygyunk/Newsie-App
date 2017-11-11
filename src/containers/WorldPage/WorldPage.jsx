import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Page from 'components/Page';
import ArticleList from 'containers/ArticleList';
import Articles from 'modules/Articles';

class WorldPage extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    Articles.fetch({ source: 'bbc-news', sortBy: 'top' }).then(articles =>
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

export default WorldPage;
