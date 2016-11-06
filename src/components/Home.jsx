import React from 'react';

class Home extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     loggedIn: true,
  //     profiles: [],
  //   };
  //   this.handleDeleteClick = this.handleDeleteClick.bind(this);
  //   this.handleUpdateClick = this.handleUpdateClick.bind(this);
  // };
  profileItems() {
    return this.props.profiles.map((profile, idx) => {
      return (

        <li key={idx}>
          <img src={profile.image} />
          <h2>Name: {profile.dog}</h2>
          <p>Breed: {profile.breed}</p>
          <p>Birthday: {profile.birthday}</p>
          <p>Social Media: {profile.social}</p>
          <p>Tags: {profile.tags}</p>
          <p>Caption: {profile.caption}</p>
          <button className="profileButton" onClick={this.props.handleUpdateClick}>Update</button>
          <button className="profileButton" onClick={this.props.handleDeleteClick}>Delete</button>
        </li>

      );
    });
  }
  render() {
    return (
      <div>
        <h1>Hi, Hello, Ruff!</h1>
        <h3>Update or Delete your Profiles Here</h3>
        <div>
        <ul>
          {this.profileItems()}
        </ul>
        </div>
      </div>
    );
  }
}


export default Home;
