const firebase = require('firebase');

// Initializes Firebase
const config = {
    apiKey: "AIzaSyBSSPAmPAy2yJVMdomX3Gh2hfgIQG3zDHU",
    authDomain: "barkprofile.firebaseapp.com",
    databaseURL: "https://barkprofile.firebaseio.com",
    storageBucket: "barkprofile.appspot.com",
    messagingSenderId: "448597692776"
  };

  firebase.initializeApp(config);

  module.exports = firebase;
