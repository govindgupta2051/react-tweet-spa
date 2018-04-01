import React from 'react';
import TweetHeader from './TweetHeader';
import TweetContent from './TweetContent';
import TweetFooter from './TweetFooter';

class TweetItem extends React.Component {
  render() {
    /* const tweetExample = {
      'created_at': 'Sat Mar 31 16:12:02 +0000 2018',
      'id': 980115513983500300,
      'id_str': '980115513983500289',
      'text': 'How The Dark Side of Facebook Has Become a Marriage Killer https://t.co/cKAKPVQ1fs #in',
      'truncated': false,
      'entities': {
      'hashtags': [{
        'text': 'in',
        'indices': [83, 86]
      }],
        'symbols': [],
        'user_mentions': [],
        'urls': [{
        'url': 'https://t.co/cKAKPVQ1fs',
        'expanded_url': 'http://www.linkedin.com/pulse/how-dark-side-facebook-has-become-marriage-killer-john-white-mba-?trk=mp-reader-card',
        'display_url': 'linkedin.com/pulse/how-dark…',
        'indices': [59, 82]
      }]
    },
      'source': '<a href="https://www.mytweetpack.com" rel="nofollow">myTweetPack</a>',
      'in_reply_to_status_id': null,
      'in_reply_to_status_id_str': null,
      'in_reply_to_user_id': null,
      'in_reply_to_user_id_str': null,
      'in_reply_to_screen_name': null,
      'user': {
      'id': 3187359674,
        'id_str': '3187359674',
        'name': 'Social Marketing',
        'screen_name': 'SocialMktgSltns',
        'location': 'Fort Collins, Colorado',
        'description': 'The Social Marketing Blog | Digital Marketing Solutions Experts | Business Bloggers | Social Media Management | Social Media Trainers | Personal Branding',
        'url': 'https://t.co/9yLmKhSKFO',
        'entities': {
        'url': {
          'urls': [{
            'url': 'https://t.co/9yLmKhSKFO',
            'expanded_url': 'http://www.socialmarketingsolutions.com',
            'display_url': 'socialmarketingsolutions.com',
            'indices': [0, 23]
          }]
        },
        'description': { 'urls': [] }
      },
      'protected': false,
        'followers_count': 54360,
        'friends_count': 45838,
        'listed_count': 1849,
        'created_at': 'Thu May 07 06:03:05 +0000 2015',
        'favourites_count': 6760,
        'utc_offset': -25200,
        'time_zone': 'Pacific Time (US & Canada)',
        'geo_enabled': true,
        'verified': false,
        'statuses_count': 104168,
        'lang': 'en',
        'contributors_enabled': false,
        'is_translator': false,
        'is_translation_enabled': false,
        'profile_background_color': 'C0DEED',
        'profile_background_image_url': 'http://abs.twimg.com/images/themes/theme1/bg.png',
        'profile_background_image_url_https': 'https://abs.twimg.com/images/themes/theme1/bg.png',
        'profile_background_tile': false,
        'profile_image_url': 'http://pbs.twimg.com/profile_images/604708167793020928/a3kgdUJs_normal.jpg',
        'profile_image_url_https': 'https://pbs.twimg.com/profile_images/604708167793020928/a3kgdUJs_normal.jpg',
        'profile_banner_url': 'https://pbs.twimg.com/profile_banners/3187359674/1490558359',
        'profile_link_color': '1DA1F2',
        'profile_sidebar_border_color': 'C0DEED',
        'profile_sidebar_fill_color': 'DDEEF6',
        'profile_text_color': '333333',
        'profile_use_background_image': true,
        'has_extended_profile': false,
        'default_profile': true,
        'default_profile_image': false,
        'following': true,
        'follow_request_sent': false,
        'notifications': false,
        'translator_type': 'none'
    },
      'geo': null,
      'coordinates': null,
      'place': null,
      'contributors': null,
      'is_quote_status': false,
      'retweet_count': 0,
      'favorite_count': 0,
      'favorited': false,
      'retweeted': false,
      'possibly_sensitive': false,
      'possibly_sensitive_appealable': false,
      'lang': 'en'
    }*/

    return (
      <div className="content-container">
        <div className="item">
          <TweetHeader {...this.props} />
          <TweetContent {...this.props} />
          <TweetFooter {...this.props} />
        </div>
      </div>
    );
  }
}

export default TweetItem;
