import React from 'react';
import PostTweet from './PostTweet';
import TweetItemList from './TweetItemList';


class TwitterDashboardBody extends React.Component {
  render(props) {
    console.log("props in dashboard body", this.props.tweetData);
    return (
      <div>
        <PostTweet
          user={this.props.user}
          token={this.props.token}
          onLoginSuccess={this.props.onLoginSuccess}
        />
        <TweetItemList tweetData={this.props.tweetData} />
      </div>
    );
  }
}

export default TwitterDashboardBody;
