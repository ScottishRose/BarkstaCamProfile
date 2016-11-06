import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from '../components/App.jsx';
import Home from '../components/Home.jsx';
import Register from '../components/Register.jsx';
import Login from '../components/Login.jsx';
import requireAuth from '../utils/auth.js';
import Profile from '../components/Profile.jsx';
import ProfileList from '../components/ProfileList.jsx';
import Dashboard from '../components/Dashboard.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}  >
        <IndexRoute component={Home} onEnter={requireAuth} />
        <Route path="register" component={Register} />
        <Route path="login" component={Login} />
        <Route path="profile" component={Profile} onEnter={requireAuth} />
        <Route path="profileList" component={ProfileList} onEnter={requireAuth} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="home" component={Home} onEnter={requireAuth} />
      </Route>
    </Router>
   );
}

export default Routes;
