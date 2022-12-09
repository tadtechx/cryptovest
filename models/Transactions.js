const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TransactionSchema = new Schema({
  ID: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  isSuccessful: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    default: 0,
  }
});

module.exports = User = mongoose.model("transactions", TransactionSchema);
