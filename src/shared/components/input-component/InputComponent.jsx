import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default class InputComponent extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { onChange } = this.props;
    return (
      <input
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
