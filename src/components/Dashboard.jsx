import React from 'react';

class Dashboard extends React.Component {
    profileItems() {
    return this.props.router.push('/dashboard');
  }
  render() {
    return (
      <div>
        <h1>Hi Hello Ruff!</h1>
        <ul>
          {this.profileItems()}
        </ul>
      </div>
    );
  }
}


export default Dashboard;
