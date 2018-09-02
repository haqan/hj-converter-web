import React from "react";
import ReactDOM from "react-dom";
import { parse } from 'url';
import { FormattedMessage } from 'react-intl';
import Spinner from '../spinner/Spinner';

import messages from './messages';

const youtubeAudioServer = process.env.YOUTUBE_API_SERVER;

const STATUS_IDLE = 'STATUS_IDLE';
const STATUS_CONVERTING = 'STATUS_CONVERTING';
const STATUS_COMPLETED = 'STATUS_COMPLETED';

export default class ConvertButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      infoMessage: messages.statusIdle,
      status: STATUS_IDLE
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    e.preventDefault();
    const reqUrl = document.getElementById('texturl').value;
    const videoId = parse(reqUrl, true).query.v;

    if (!videoId) {
      return false;
    }

    this.setState({
      infoMessage: messages.statusConverting,
      status: STATUS_CONVERTING,
      downloadUrl: null
    });

    // Convert to mp3
    fetch(`${youtubeAudioServer}/quick/${videoId}`)
      .then(res => res.json())
      .then((jsonData) => {
        if (jsonData.file) {
          this.setState({
            infoMessage: messages.statusComplete,
            status: STATUS_COMPLETED,
            downloadTitle: jsonData.youtubeClipInfo.title,
            downloadUrl: `${youtubeAudioServer}/${jsonData.file}`
          });
        }
      });

  }

  render() {
    const { infoMessage, downloadUrl, downloadTitle, status } = this.state;
    const { disabled } = this.props;

    const className = `btn convert-button ${disabled? 'disabled' : ''}`;
    return (
      <div className="download-container">
        <button type="submit" className={ className } onClick={ this.handleOnClick }>
          { messages.convert }
        </button>
        { status === STATUS_IDLE &&
            <p>
              { messages.statusIdle }
            </p>
        }
        { status === STATUS_CONVERTING &&
          <p>
            <Spinner /> { messages.statusConverting }
          </p>
        }
        { downloadUrl &&
            <p>
              <FormattedMessage
                id="convertButton.conversionCompleted"
                defaultMessage={ messages.conversionCompleted }
                values={
                  { e: downloadTitle }
                }
              />
              &nbsp;
              <a className="converted-audio" href={ downloadUrl } download>
                { messages.clickToDownload }
              </a>
            </p>
        }
      </div>
    );
  }
}
