const passport = require('passport');
const GoogleStratergy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');
const keys = require('../config/keys');

passport.use(new GoogleStratergy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  new User({ googleId: profile.id }).save();
}));
