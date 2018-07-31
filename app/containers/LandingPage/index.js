/*
 * LandingPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import InputComponent from '../../components/input-component/InputComponent';
import ConvertButton from '../../components/convert-button/ConvertButton';

import './landing-page.scss';

/* eslint-disable react/prefer-stateless-function */
export default class LandingPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      convertButtonDisabled: true,
    };
    this.onChange = this.onChange.bind(this);
  }

  isAcceptableLink = link =>
    link.length > 5 && link.toLowerCase().includes('youtube.com');

  onChange = e => {
    this.setState({
      convertButtonDisabled: !this.isAcceptableLink(e.target.value),
    });
  };

  render() {
    return [
      <h1 key="h1">Convert YouTube videos to mp3 files</h1>,
      <form key="form" method="post" className="convert-section">
        <InputComponent onChange={this.onChange} />
        <ConvertButton disabled={this.state.convertButtonDisabled} />
      </form>,
    ];
  }
}
