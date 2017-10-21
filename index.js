const express = require('express');
const passport = require('passport');
const GoogleStratergy = require('passport-google-oauth20').Strategy;

const keys = require('./config/keys');

const app = express();

passport.use(new GoogleStratergy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log(accessToken);
  console.log(profile);
}));

//Route Handler
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

//Redirect URI
app.get('/auth/google/callback', passport.authenticate('google'));


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server is up!');
});
