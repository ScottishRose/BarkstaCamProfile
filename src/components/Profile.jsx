import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      dog: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmit() {
    const { dog, password } = this.state;
    firebase.auth()
      .createUserWithEmailAndPassword(dog, password)
      .catch((err) => {
        console.log(err);
      })
      .then((user) => {
        firebase.database().ref('users')
          .child(user.uid)
          .set({first_name: '', last_name: '', email: email})
      })
  }

  render() {
    return (
      <div>
        <h1>Doggie Profile</h1>
          <div id="profile-form">
            <div>
              <input name="dog" onChange={this.handleChange} type="text" placeholder="Pup's Name" />
            </div>
            <div>
              <input name="breed" onChange={this.handleChange} type="text" placeholder="Breed" />
            </div>
            <button className="button" onClick={this.handleSubmit}>Submit</button>
          </div>
      </div>
    )
  };
}

export default withRouter(Profile);
