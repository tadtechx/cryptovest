const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");


// Load Transaction model
const Transactions = require("../../models/Transactions");

// @route POST api/transactions/addfunds
// @desc Add transaction to database
// @access Public
router.post("/addfunds", (req, res) => {

     
        const newTransactions = new Transactions({
            idnumber: req.body.idnumber,
            email: req.body.email,
            amount: req.body.amount,
            method: req.body.network
        });

        newTransactions
            .save()
            .then(txn => console.log(txn))
            .catch(err => console.log(err));

});


router.get("/fetchtransactions", async (req, res) => {

    const theTransactions = await Transactions.find();
  
    res.send(
        theTransactions
    );
  });



module.exports = router;
