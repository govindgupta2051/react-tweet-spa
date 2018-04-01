import React from 'react';
import TweetItem from './TweetItem';

/*
const sampleTweet = {
"created_at":"Sat Mar 31 16:12:00 +0000 2018",
"id":980115503002906600,
"id_str":"980115503002906624",
"text":"Make Compound React Components Flexible - #react lesson by @kentcdodds https://t.co/V4kMmxpxDN",
"truncated":false,
"entities":{
"hashtags":[
  {
    "text":"react",
    "indices":[
      42,
      48
      ]
  }
  ],
"symbols":[

  ],
"user_mentions":[
  {
    "screen_name":"kentcdodds",
    "name":"Kent C. Dodds",
    "id":389681470,
    "id_str":"389681470",
    "indices":[
      59,
      70
      ]
  }
  ],
"urls":[
  {
    "url":"https://t.co/V4kMmxpxDN",
    "expanded_url":"http://bit.ly/2u93s3J",
    "display_url":"bit.ly/2u93s3J",
    "indices":[
      71,
      94
      ]
  }
  ]
},
"source":"<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
"in_reply_to_status_id":null,
"in_reply_to_status_id_str":null,
"in_reply_to_user_id":null,
"in_reply_to_user_id_str":null,
"in_reply_to_screen_name":null,
"user":{
"id":921398240,
"id_str":"921398240",
"name":"egghead.io",
"screen_name":"eggheadio",
"location":"at the computer",
"description":"High quality, concise web development screencasts. Coding with expert open-source contributors.  Let’s make the web better. ❤️  (Twitter not monitored)",
"url":"https://t.co/8M5K6Sr7rL",
"entities":{
  "url":{
    "urls":[
      {
        "url":"https://t.co/8M5K6Sr7rL",
        "expanded_url":"http://egghead.io/browse",
        "display_url":"egghead.io/browse",
        "indices":[
          0,
          23
          ]
      }
      ]
  },
  "description":{
    "urls":[

      ]
  }
},
"protected":false,
"followers_count":45515,
"friends_count":100,
"listed_count":1328,
"created_at":"Fri Nov 02 17:03:39 +0000 2012",
"favourites_count":880,
"utc_offset":null,
"time_zone":null,
"geo_enabled":false,
"verified":false,
"statuses_count":9666,
"lang":"en",
"contributors_enabled":false,
"is_translator":false,
"is_translation_enabled":false,
"profile_background_color":"E6E9EB",
"profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
"profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
"profile_background_tile":false,
"profile_image_url":"http://pbs.twimg.com/profile_images/735242324293210112/H8YfgQHP_normal.jpg",
"profile_image_url_https":"https://pbs.twimg.com/profile_images/735242324293210112/H8YfgQHP_normal.jpg",
"profile_banner_url":"https://pbs.twimg.com/profile_banners/921398240/1475031293",
"profile_link_color":"0084B4",
"profile_sidebar_border_color":"FFFFFF",
"profile_sidebar_fill_color":"DDEEF6",
"profile_text_color":"333333",
"profile_use_background_image":false,
"has_extended_profile":false,
"default_profile":false,
"default_profile_image":false,
"following":true,
"follow_request_sent":false,
"notifications":false,
"translator_type":"none"
},
"geo":null,
"coordinates":null,
"place":null,
"contributors":null,
"is_quote_status":false,
"retweet_count":0,
"favorite_count":3,
"favorited":false,
"retweeted":false,
"possibly_sensitive":false,
"possibly_sensitive_appealable":false,
"lang":"en"
};*/

class TweetItemList extends React.Component {
  render() {
    const tweetsAraay = this.props.tweetData;
    return (
      <div>{
        tweetsAraay.length === 0
          ?
          (<span>No tweets</span>)
          :
          (tweetsAraay.map(tweet => (
            <TweetItem key={tweet.id} {...tweet} />
            ))
          )
      }
      </div>
    );
  }
}

export default TweetItemList;
