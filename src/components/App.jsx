import React, { Component} from 'react';
import { Link } from 'react-router';
import firebase from '../../firebase.config.js';

const propTypes = {

};

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
    this.signOut = this.signOut.bind(this);
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

  signOut() {
    firebase.auth()
      .signOut()
      .then(() => {
        console.log('user signed out');
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
    return (
      <div>
        <div id="main-nav">

          {
            this.logInLinks()
          }
        </div>
        <div id="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
