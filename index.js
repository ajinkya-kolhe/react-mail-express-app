const express = require('express');

const passportConfig = require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server is up!');
});
