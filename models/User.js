const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
// Above line is same as below Destrucutring syntax.
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  email: String
});

mongoose.model('users', userSchema);
