import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ArticleCard.css';

class ArticleCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    source: PropTypes.string,
    onClick: PropTypes.func,
  };

  render() {
    return (
      <div className="article-card">
        <img src={this.props.imageUrl} className="thumbnail" width="100px" />
        <p className="title">{this.props.title}</p>
      </div>
    );
  }
}

export default ArticleCard;
