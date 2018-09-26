import React, { Component } from "react";
import {IntlProvider} from 'react-intl';

import ConvertButton from './components/convert-button/ConvertButton';
import InputComponent from './components/input-component/InputComponent';
import messages from './messages';

import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      convertButtonDisabled: true,
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {

  }

  isAcceptableLink = link =>
    link.length > 5 && link.toLowerCase().includes('youtube.com');

  onChange = e => {
    this.setState({
      convertButtonDisabled: !this.isAcceptableLink(e.target.value),
    });
  };

  render() {
    return (
      <IntlProvider locale="en">
        <div className="landing-page">
          <h2 className="sub-header">{messages.landingPageHeader2}</h2>
          <h1>{messages.landingPageHeader}</h1>
          <div className="intro-background">
            <p className="intro-text">{messages.landingPageIntroText}</p>
          </div>

          <form key="form" method="post" className="convert-section">
            <InputComponent onChange={this.onChange} />
            <ConvertButton disabled={this.state.convertButtonDisabled} />
          </form>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
