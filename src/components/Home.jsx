import React from 'react';

class Home extends React.Component {
  profileItems() {
    return this.props.profiles.map((profile, idx) => {
      return (
        <li key={idx}>
          <h3>{profile.dog}</h3>
          <p>{profile.breed}</p>
          <p>{profile.birthday}</p>
        </li>
      );
    });
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


export default Home;
