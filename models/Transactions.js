const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TransactionSchema = new Schema({
  idnumber: {
    type: Number,
    // required: true
  },
  email: {
    type: String,
    // required: true
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
  },
  method: {
    type: String,
  }
});

module.exports = Transactions = mongoose.model("transactions", TransactionSchema);
