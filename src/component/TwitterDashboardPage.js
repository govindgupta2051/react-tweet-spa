import React from 'react';

import TwitterDashboardHeader from './TwitterDashboardHeader';
import TwitterDashboardBody from './TwitterDashboardBody';

class TwitterDashboardPage extends React.Component {
  render() {
    return (
      <div>
        <div><TwitterDashboardHeader user={this.props.user} logout={this.props.logout} /></div>
        <div>
          <TwitterDashboardBody
            user={this.props.user}
            token={this.props.token}
            tweetData={this.props.tweetData}
            onLoginSuccess={this.props.onLoginSuccess}
          />
        </div>
      </div>
    );
  }
}

export default TwitterDashboardPage;
