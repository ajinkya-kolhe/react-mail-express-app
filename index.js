const express = require('express');
const mongoose = require('mongoose');

require('./models/User');
require('./services/passport');
const keys = require('./config/keys');

// Add below 2 lines to fix the deprecation errors related to mongoose.
// Promise and JSON object in connect().
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
  useMongoClient: true,
});

const app = express();
require('./routes/authRoutes')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server is up!');
});
