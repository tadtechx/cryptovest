const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
const Transaction = require("../../models/Transactions");


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        balance: 0,
      });




      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});


// User.find().then(alldat => {

//     return res.status(400).json({ alldat });
//   });
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          email: user.email,
          name: user.name,
          balance: user.balance,
        };

        console.log(user.email);

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});



// @route POST api/users/register
// @desc Register user
// @access Public
// router.post("/transactions", (req, res) => {


//   // Form validation

//   //   const { errors, isValid } = validateRegisterInput(req.body);

//   // Check validation
//   //   if (!isValid) {
//   //     return res.status(400).json(errors);
//   //   }

//   // User.findOne({ email: req.body.email }).then(() => {
//       const newTransaction = new Transaction({
//           idnumber: req.body.idnumber,
//           email: req.body.email,
//           amount: req.body.amount,
//       });

//   // });
// });

// router.route('/fetchusers').get((req, res) => {
//   User.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json.data
//     }
//   })
// })

router.get("/fetchusers", async (req, res) => {
  console.log("Hey I'm in the back end , the ticker is: ");
  //error
  // const query = { symbol: req.symbol };
  const thisUser = await User.findOne();
  res.json({
    name: thisUser.name,
    email: thisUser.email,
  });
});

module.exports = router;
