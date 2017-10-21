const passport = require('passport');

module.exports = (app) => {
  //Route Handler
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  //Redirect URI
  app.get('/auth/google/callback', passport.authenticate('google'));
};
