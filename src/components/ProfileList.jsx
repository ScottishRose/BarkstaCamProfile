import React, { Component } from 'react';
import Profile from './Profile.jsx';

const propTypes = {
  profile: React.PropTypes.array.isRequired,
  handlePublish: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
};

class ProfileList extends Component {
  render() {
    // if (this.props.data) {
      const profileElement = this.props.profile.map((profile, idx) => {
        return (
          <li key={idx}>
            <Profile
              handleDelete={this.props.handleDelete}
              handlePublish={this.props.handlePublish}
              dog={profile.dog}
              breed={profile.breed}
              birthday={profile.birthday}
              id={profile.id}
            />
          </li>
        );
      });
    // }
    return (
      <div>
        {profileElement}
      </div>
    );
  }
}

ProfileList.propTypes = propTypes;

export default ProfileList;
