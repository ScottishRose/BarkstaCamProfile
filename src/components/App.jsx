import React, { Component} from 'react';
import { Link, withRouter } from 'react-router';
import firebase from '../../firebase.config.js';
import Profile from './Profile.jsx';
import ProfileList from './ProfileList.jsx';
import request from 'superagent';

const propTypes = {

};

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      profiles: [],
    };
    this.signOut = this.signOut.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.httpGetProfile = this.httpGetProfile.bind(this);
    this.httpDeleteProfile = this.httpDeleteProfile.bind(this);
    this.httpUpdateProfile = this.httpUpdateProfile.bind(this);
    this.httpPublishProfile = this.httpPublishProfile.bind(this);
  }
  componentDidMount() {
    this.httpGetProfile();
  }
  componentWillMount() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({
          loggedIn: (user !== null),
        });
      });
    }, 200);
  }
  httpGetProfile() {
  const url = 'https://barkprofile.firebaseio.com/profile.json';
  request.get(url)
         .then((response) => {
          console.log(response);
           const profileData = response.body;
           let profiles = [];
           if (profileData) {
             profiles = Object.keys(profileData).map((id) => {
               const individualProfileData = profileData[id];
               return {
                 id,
                 image: individualProfileData.image,
                 dog: individualProfileData.dog,
                 breed: individualProfileData.breed,
                 birthday: individualProfileData.birthday,
                 social: individualProfileData.social,
                 tags: individualProfileData.tags,
                 caption: individualProfileData.caption,
               };
             });
           }
           this.setState({ profiles });
         });
}
handlePublish({ id, image, dog, breed, birthday, social, tags, caption }) {
    if (id) {
      this.httpUpdateProfile({ id, image, dog, breed, birthday, social, tags, caption });
    } else {
      this.httpPublishProfile({ id, image, dog, breed, birthday, social, tags, caption });
    }
  }
 httpDeleteProfile(id) {
  const url = `https://barkprofile.firebaseio.com/profile${id}.json`;
  request.del(url)
         .then(() => {
           this.httpGetProfile();
         });
}
httpUpdateProfile({ id, image, dog, breed, birthday, social, tags, caption }) {
  const url = `https://barkprofile.firebaseio.com/profile${id}.json`;
  request.patch(url)
         .send({ image, dog, breed, birthday, social, tags, caption })
         .then(() => {
           this.httpGetPosts();
         });
}
httpPublishProfile({ image, dog, breed, birthday, social, tags, caption }) {
  const url = 'https://barkprofile.firebaseio.com/profile.json';
  request.post(url)
         .send({ image, dog, breed, birthday, social, tags, caption })
         .then(() => {
           this.httpGetProfile();
         });
}
  signOut() {
    firebase.auth()
      .signOut()
      .then(() => {
        this.props.router.push('/');
      });
  }



  logInLinks() {
    if (!this.state.loggedIn) {
      return (
        <div>
          <Link to="/Login" id="login"> Login/ </Link>
          <Link to="/register" id="register"> Register </Link>
        </div>
      );
    } else {
      return (
        <div id="sign-out">
          <Link to="/" onClick={this.signOut}>Sign Out</Link>
        </div>
      );
    }
  }

  render() {
    const childrenWithProps = React.cloneElement(this.props.children, {
      handlePublish: this.handlePublish,
      httpDeleteProfile: this.httpDeleteProfile,
      profiles: this.state.profiles,
    });
    return (
      <div>
        <div id="main-nav">
          {
            this.logInLinks()
          }
        </div>
        <div id="main-content">
          {childrenWithProps}
        </div>
    </div>
    );
  }
}

App.propTypes = propTypes;

export default withRouter(App);
