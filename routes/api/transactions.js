const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");

// Load User model
const Transaction = require("../../models/Transactions");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/addfunds", (req, res) => {


    // Form validation

    //   const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    //   if (!isValid) {
    //     return res.status(400).json(errors);
    //   }

    User.findOne({ email: req.body.email }).then(() => {
        const newTransaction = new Transaction({
            ID: req.body.ID,
            email: req.body.email,
            amount: req.body.amount,
        });

    });
});

   


module.exports = router;
