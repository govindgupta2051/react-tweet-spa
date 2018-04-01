import React from 'react';
import moment from 'moment';

class TweetHeader extends React.Component {
  // name screen_name created_at

  // {id, created_at, text, user, retweet_count, favorite_count, retweeted, favorited}
  render() {
    return (
      <div className="item-header">
        {this.props.user.name} @{this.props.user.screen_name} {moment(this.props.created_at)
        .fromNow(true)}
      </div>
    );
  }
}

export default TweetHeader;
