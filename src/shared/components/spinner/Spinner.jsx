import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components'

const StyledSpinner = styled.svg`
  margin: 0 4px 0 0;
`;

export default class Spinner extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const width = '34px';
    const height = '34px';
    const fillColor = '#fff';

    return (
        <StyledSpinner xmlns="http://www.w3.org/2000/svg" version="1.0" width={ width } height={ height } viewBox="0 0 128 128">
          <rect x="0" y="0" width="100%" height="100%" fill={ fillColor } />
          <g>
            <linearGradient id="linear-gradient">
              <stop offset="0%" stopColor="#ffffff" fillOpacity="0"/>
              <stop offset="100%" stopColor="#000000" fillOpacity="1"/>
            </linearGradient>
            <path d="M63.85 0A63.85 63.85 0 1 1 0 63.85 63.85 63.85 0 0 1 63.85 0zm.65 19.5a44 44 0 1 1-44 44 44 44 0 0 1 44-44z"
              fill="url(#linear-gradient)" fillRule="evenodd"/>
            <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1080ms" repeatCount="indefinite"></animateTransform>
          </g>
        </StyledSpinner>
    );
  }
}
