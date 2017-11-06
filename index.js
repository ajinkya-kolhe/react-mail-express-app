const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

// Load the models.
require('./models/User');
require('./models/Survey');

// Load the passport file.
require('./services/passport');

const keys = require('./config/keys');

// Add below 2 lines to fix the deprecation errors related to mongoose.
// Promise and JSON object in connect().
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
  useMongoClient: true,
});

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Route handlers
require('./routes/authRoutes')(app);
require('./routes/billing')(app);

// Routing in production.
if (process.env.NODE_ENV === 'production') {
  // Express will serve Production Assets like
  // main.js or main.css
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it does not recognise the Route.
  const path = require('path');
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Server is up!');
});
