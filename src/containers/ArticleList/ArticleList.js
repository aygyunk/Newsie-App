import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ArticleCard from 'components/ArticleCard';

import './ArticleList.css';

class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="article-list">
        {this.props.articles.map(article => (
          <ArticleCard
            key={article.title}
            title={article.title}
            imageUrl={article.image}
            sourceUrl={article.url}
          />
        ))}
      </div>
    );
  }
}

export default ArticleList;
