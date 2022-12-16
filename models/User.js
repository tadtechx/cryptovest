const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
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
  date: {
    type: Date,
    default: Date.now
  },
  balance: {
    type: Number,
    default: 0,
  },
  
  roi: {
    type: Number,
  },
  invested: {
    type: Number,
  },
  bonus: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  hasAPlan: {
    type: Boolean,
  },
  investdate: {
    type: Date,
  }
});

module.exports = User = mongoose.model("users", UserSchema);
