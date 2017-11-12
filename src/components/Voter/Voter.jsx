import React, { Component } from 'react';
import PropTypes from 'prop-types';
import btoa from 'btoa';
import isNil from 'lodash/isNil';

import fire from 'instances/fire';

import './Voter.css';

class Voter extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  state = {
    count: null,
  };

  componentDidMount() {
    this.articleRef = fire.database().ref(`articles/${btoa(this.props.id)}`);

    this.articleRef.on('value', snapshot => {
      // set a default if no value is present
      if (isNil(snapshot.val())) {
        this.articleRef.set(0);
      } else {
        this.setState(prevState => ({
          count: snapshot.val(),
        }));
      }
    });
  }

  render() {
    if (isNil(this.state.count)) {
      return null;
    }

    return (
      <div className="voter">
        <div className="vote-up" onClick={this.onVoteUp}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFF"
            height="18"
            viewBox="0 0 24 24"
            width="18"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
          </svg>
        </div>

        <p className="count">{this.state.count}</p>

        <div className="vote-down" onClick={this.onVoteDown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFF"
            height="18"
            viewBox="0 0 24 24"
            width="18"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
          </svg>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    this.articleRef = null;
  }

  onVoteUp = () => {
    this.setState(
      prevState => ({
        count: prevState.count + 1,
      }),
      () => {
        this.articleRef.set(this.state.count);
      },
    );
  };

  onVoteDown = () => {
    this.setState(
      prevState => ({
        count: prevState.count - 1,
      }),
      () => {
        this.articleRef.set(this.state.count);
      },
    );
  };
}

export default Voter;
