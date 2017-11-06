import React, { Component } from 'react';

import ArticleCard from 'components/ArticleCard';
import Articles from 'modules/Articles';

import './ArticleList.css';

class ArticleList extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    // Articles.fetch().then(function(data) {
    //   const articles = data.articles;
    //
    //   this.setState(function(prevState) {
    //     return Object.assign({}, prevState, {
    //       articles: articles,
    //     });
    //   });
    // });

    Articles.fetch().then(({ articles }) =>
      this.setState(prevState => ({ ...prevState, articles })),
    );
  }

  render() {
    return (
      <div>
        {this.state.articles.map(article => (
          <ArticleCard
            title={article.title}
            imageUrl={article.image}
            source={article.source}
            onClick={() => {}}
          />
        ))}
      </div>
    );
  }
}

export default ArticleList;
