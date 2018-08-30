const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fName: {
    type: String,
    required: false
  },
  lName: {
    type: String,
    required: false
  },
  profileImageUrl: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  groups: [{
    type: Schema.Types.ObjectId,
    ref: 'Group'
  }],
  chores: [{
    type: Schema.Types.ObjectId,
    ref: 'Chore'
  }],
  chats: [{
    type: Schema.Types.ObjectId,
    ref: 'Chat'
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
