import React, { Component } from "react";
import {IntlProvider} from 'react-intl';
import styled from 'styled-components'

import ConvertButton from './components/convert-button/ConvertButton';
import InputComponent from './components/input-component/InputComponent';
import messages from './messages';

import globalstyles from './globalstyles.js';

const StyledLandingPage = styled.div`
  text-align: center;
  max-width: 712px;
  margin: 40px auto;
  font-family: ${globalstyles.font.family};

  .convert-section {
    margin: 0 auto;
    padding: ${globalstyles.space};
    background: ${globalstyles.colors.white};
    display: flex;
    flex-flow: column;
  }
  .sub-header {
    font-size: 26px;
    font-family: Georgia;
    font-weight: bold;
    letter-spacing: 6px;
    color: ${globalstyles.colors.color3};
    margin: ${globalstyles.space} 0 0;
    text-transform: uppercase;
    text-shadow: 0 0 3px #ccc;
    display: block;
  }
  h1 {
    font-family: ${globalstyles.font.family};
    font-weight: normal;
    font-size: 12px;
    display: block;
    margin-bottom: ${globalstyles.space};
    text-shadow: none;
    text-transform: uppercase;
    letter-spacing: 4px;
    padding: 0;
  }
  .intro-background {
    background: repeat ${globalstyles.colors.color4} url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 52 52'%3E%3Cpath fill='%23300' fill-opacity='0.07' d='M0 17.83V0h17.83a3 3 0 0 1-5.66 2H5.9A5 5 0 0 1 2 5.9v6.27a3 3 0 0 1-2 5.66zm0 18.34a3 3 0 0 1 2 5.66v6.27A5 5 0 0 1 5.9 52h6.27a3 3 0 0 1 5.66 0H0V36.17zM36.17 52a3 3 0 0 1 5.66 0h6.27a5 5 0 0 1 3.9-3.9v-6.27a3 3 0 0 1 0-5.66V52H36.17zM0 31.93v-9.78a5 5 0 0 1 3.8.72l4.43-4.43a3 3 0 1 1 1.42 1.41L5.2 24.28a5 5 0 0 1 0 5.52l4.44 4.43a3 3 0 1 1-1.42 1.42L3.8 31.2a5 5 0 0 1-3.8.72zm52-14.1a3 3 0 0 1 0-5.66V5.9A5 5 0 0 1 48.1 2h-6.27a3 3 0 0 1-5.66-2H52v17.83zm0 14.1a4.97 4.97 0 0 1-1.72-.72l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1 0-5.52l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43c.53-.35 1.12-.6 1.72-.72v9.78zM22.15 0h9.78a5 5 0 0 1-.72 3.8l4.44 4.43a3 3 0 1 1-1.42 1.42L29.8 5.2a5 5 0 0 1-5.52 0l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1-.72-3.8zm0 52c.13-.6.37-1.19.72-1.72l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43a5 5 0 0 1 5.52 0l4.43-4.43a3 3 0 1 1 1.42 1.41l-4.44 4.43c.36.53.6 1.12.72 1.72h-9.78zm9.75-24a5 5 0 0 1-3.9 3.9v6.27a3 3 0 1 1-2 0V31.9a5 5 0 0 1-3.9-3.9h-6.27a3 3 0 1 1 0-2h6.27a5 5 0 0 1 3.9-3.9v-6.27a3 3 0 1 1 2 0v6.27a5 5 0 0 1 3.9 3.9h6.27a3 3 0 1 1 0 2H31.9z'%3E%3C/path%3E%3C/svg%3E");
    opacity: .5;
  }
  .intro-text {
    max-width: 340px;
    margin: 0 auto;
    padding: ${globalstyles.space} 0;
    color: ${globalstyles.colors.white};
    font-size: 14px;
    font-weight: normal;
    font-family: ${globalstyles.font.family};
  }

  .main-container {
    text-align: center;
    margin: 0 auto;
    padding: ${globalstyles.space} 0;
    min-height: 400px;
    max-width: 720px;
  }

  .input-component {
    width: 100%;
    min-width: 400px;
  }

  @media screen and (min-width: 800px) {
    .intro-background {
      margin: 0 $space;
    }
  }
`

class App extends Component {
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
    return (
      <IntlProvider locale="en">
        <StyledLandingPage>
          <h2 className="sub-header">{messages.landingPageHeader2}</h2>
          <h1>{messages.landingPageHeader}</h1>
          <div className="intro-background">
            <p className="intro-text">{messages.landingPageIntroText}</p>
          </div>

          <form key="form" method="post" className="convert-section">
            <InputComponent onChange={this.onChange} />
            <ConvertButton disabled={this.state.convertButtonDisabled} />
          </form>
        </StyledLandingPage>
      </IntlProvider>
    );
  }
}

export default App;
