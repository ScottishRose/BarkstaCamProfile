import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
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
    const { email, password } = this.state;
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
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
        <h1>Don't have an account? Sign up for one here</h1>
          <div id="registration-form">
            <div>
              <input name="email" onChange={this.handleChange} type="text" placeholder="email" />
            </div>
            <div>
              <input name="password" onChange={this.handleChange} type="password" placeholder="password" />
            </div>
            <button className="button" onClick={this.handleSubmit}>Register</button>
          </div>
      </div>
    )
  };
}

export default withRouter(Register);
