import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components'

import globalstyles from '../../globalstyles';
import messages from './messages';

const StyledTextBox = styled.input`
  border: 1px solid ${globalstyles.colors.color3};
  border-radius: ${globalstyles.borderRadius};
  padding: ${globalstyles.space};
  font-size: 14px;
`

export default class InputComponent extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { onChange } = this.props;
    return (
      <StyledTextBox
        name="texturl"
        type="text"
        className="textbox"
        id="texturl"
        onChange={ onChange }
        placeholder={ messages.header.defaultMessage }
      />
    );
  }
}
