import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Voter from 'components/Voter';

import './ArticleCard.css';

class ArticleCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    sourceUrl: PropTypes.string,
  };

  render() {
    return (
      <div className="article-card">
        <img
          src={this.props.imageUrl}
          className="thumbnail"
          width="100px"
          alt="article-thumbnail"
        />
        <div className="information">
          <a href={this.props.sourceUrl} target="_blank" className="title">
            {this.props.title}
          </a>
          <Voter id={this.props.title} />
        </div>
      </div>
    );
  }
}

export default ArticleCard;
