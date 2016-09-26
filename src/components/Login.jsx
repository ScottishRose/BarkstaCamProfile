import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

const propTypes = {
  push: React.PropTypes.func.isRequired,
}


class Login extends Component {
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
    this.context.router.push('/profile');
  }

  render() {
    return (
      <div>
        <h1> BarkBox Login</h1>
        <div id="login-form">
          <div>
            <input name="email" onChange={this.handleChange} type="text" placeholder="email" />
          </div>
          <div>
            <input name="password" onChange={this.handleChange} type="password" placeholder="password" />
          </div>
            <button className="button" onClick={this.handleSubmit}>Log In</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
