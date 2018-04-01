import React from 'react';
import TwitterLoginPage from './TwitterLoginPage';
import TwitterDashboardPage from './TwitterDashboardPage';
import axios from 'axios';


class TwitterHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      user: null,
      token: '',
      tweetData: '',
      postTweet: '',
      error: ''
    };
  }

  logout = () => {
    this.setState({isAuthenticated: false, token: '', user: null,tweetData:'', postTweet:'', error:''})
  };

  onLoginSuccess = (stateData) => {
    if(stateData.isAuthenticated){
      axios.get('http://localhost:4030/api/v1/auth/home_timeline', {
        params: {
          token: stateData.token,
          user: stateData.user
        }
      }).then((response) => {
          this.setState({
            isAuthenticated:stateData.isAuthenticated,user:stateData.user,token:stateData.token, tweetData: response.data
          });
        }).catch((e) =>{
        console.log('e', e);
      });

      this.setState({

      });
    }
  };

  render() {
    let content = this.state.isAuthenticated ? <TwitterDashboardPage tweetData={this.state.tweetData} user={this.state.user} token={this.state.token} onLoginSuccess={this.onLoginSuccess} logout={this.logout}/> :
      <TwitterLoginPage onLoginSuccess={this.onLoginSuccess} {...this.state} />;
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default TwitterHomePage;

