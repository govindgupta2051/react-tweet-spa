import React from 'react';
import TwitterLogin from 'react-twitter-auth';
import axios from 'axios';


class TwitterLoginPage extends React.Component {

  onSuccess = (response) => {
    const token = response.headers.get('x-auth-token');
    response.json().then(user => {
      if(token){
        this.setState({
          isAuthenticated:true,
          user,
          token,
          error:''
        });
        this.props.onLoginSuccess(this.state);
      }
    })
  };

  onFailed = (error) => {
    this.setState({
      error: 'Please retry after sometime.'
    })
  };

  testServer = () =>{
    axios.get('http://localhost:4030/health-check').then((res) => {
      console.log('res ',res);
    });
  };

  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          {this.props.error && <p className="form__error">{this.props.error}</p>}
          <TwitterLogin
            loginUrl="http://localhost:4030/api/v1/auth/twitter"
            onFailure={this.onFailed}
            onSuccess={this.onSuccess}
            requestTokenUrl="http://localhost:4030/api/v1/auth/twitter/reverse"
          />
        </div>
      </div>
    );
  }
}

export default TwitterLoginPage;
