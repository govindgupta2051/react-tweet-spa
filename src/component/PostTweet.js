import React from 'react';
import axios from 'axios';

class PostTweet extends React.Component {

  onTweetChange = (e) =>{
    const postTweet = e.target.value;
    this.setState(() => ({postTweet}));
  };

/*  onSuceess = () => {
    axios.get('http://localhost:4030/api/v1/auth/home_timeline', {
      params: {
        token: this.props.token,
        user: this.props.user
      }
    }).then((response) => {
      this.setState({tweetData: response.data});
    }).catch((e) =>{
    });
  };*/

  submitTweet =(e) => {
    e.preventDefault();
    if(!this.state.postTweet){
      this.setState(()=>({
        error:'Please provide tweet content'
      }))
    }else{
      this.setState({
        error:''
      });

      // this.setState(() => ({postTweet}));
      axios.post('http://localhost:4030/api/v1/auth/post_tweet',{
        token:this.props.token,
        user:this.props.user,
        tweetText:this.state.postTweet
      }).then((response) =>{
        //this.setState({postTweet:''});
        let stateData = {
          isAuthenticated:true,
          user:this.props.user,
          token:this.props.token,
          tweetData: '',
          postTweet:''
        };
        this.props.onLoginSuccess(stateData);
      }).catch((e) =>{
        console.log('error in posting tweet', e);
      })
    }
  };



  render() {
    return (
      <div className="content-container">
        <form className="form" onSubmit={this.submitTweet}>
          <textarea
            className="textarea"
            placeholder="What's happening ?"
            value={this.props.postTweet}
            onChange={this.onTweetChange}
          />
          <div>
            <button className="button">Post Tweet</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostTweet;
