import React from 'react';
import FaComment from 'react-icons/lib/fa/comment';
import FaHeart from 'react-icons/lib/fa/heart';
import FaRetweet from 'react-icons/lib/fa/retweet';


class TweetFooter extends React.Component {
  // retweet_count,favorite_count retweeted,favorited
  render() {
    return (
      <div className="item-content">
        <FaComment />
        <span><FaRetweet /><span className="item-icon">{this.props.retweet_count}</span></span>
        <span><FaHeart /> <span className="item-icon">{this.props.favorite_count}</span></span>
      </div>
    );
  }
}

export default TweetFooter;
