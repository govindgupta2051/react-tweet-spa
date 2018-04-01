import React from 'react';

class TweetContent extends React.Component {
  // text
  render() {
    return (
      <div >
        <div className="item-content">
          {this.props.text}
        </div>
        <div className="item-content">
          <img className="item-content-img" src={this.props.entities.media && this.props.entities.media[0].media_url_https} />
        </div>
      </div>
    );
  }
}
export default TweetContent;
