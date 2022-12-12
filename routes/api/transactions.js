const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");


// Load Transaction model
const Transactions = require("../../models/Transactions");

// @route POST api/transactions/addfunds
// @desc Add transaction to database
// @access Public
router.post("/addfunds", (req, res) => {

 

        newTransactions
            .save()
            .then(txn => console.log(txn))
            .catch(err => console.log(err));

});

   


module.exports = router;
