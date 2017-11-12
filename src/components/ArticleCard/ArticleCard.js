import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Voter from 'components/Voter';

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
        <div className="information">
          <p className="title">{this.props.title}</p>
          <Voter id={this.props.title} />
        </div>
      </div>
    );
  }
}

export default ArticleCard;
