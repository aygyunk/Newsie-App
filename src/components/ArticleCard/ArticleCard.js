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
      <div>
        <img src={this.props.imageUrl} width="100px" />
        {this.props.title}
      </div>
    );
  }
}

export default ArticleCard;
