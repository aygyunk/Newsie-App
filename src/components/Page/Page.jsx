import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Page.css';

class ArticleCard extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return <div className="page">{this.props.children}</div>;
  }
}

export default ArticleCard;
