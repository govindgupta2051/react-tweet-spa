import React from 'react';

class TwitterDashboardHeader extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <div className="header__title">
              <h1>Welcome, {this.props.user.email}</h1>
            </div>
            <div>
              <button className="button button--link" onClick={this.props.logout}>Logout</button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default TwitterDashboardHeader;

