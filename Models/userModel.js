const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  tasks: [
    {
      tid: { type: String },
      tname: { type: String }
    }
  ]
});

const users = mongoose.model('users', userSchema);

module.exports = users;
