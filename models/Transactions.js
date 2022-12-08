const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TransactionSchema = new Schema({
  ID: {
    type: Number,
    required: true
  },
  isSuccessful: {
    type: Boolean,
    required: true
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
