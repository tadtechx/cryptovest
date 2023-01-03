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

        // console.log(user.email);

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






router.get("/fetchusers", async (req, res) => {

  // const thisUser = await User.findOne({email:"chibuike@yahoo.com"});
  const thisUser = await User.find();

  res.send(
   thisUser
  );
  // res.json({
  //   name: thisUser.name,
  //   email: thisUser.email,
  // });
});



router.get("/finduser", async (req, res) => {

  

  const param = req.query.email;

  User.findOne({email: param})
  .then(user => {
    if (user){
    res.send(user);} else {
      res.send("User not found");
    }
  })
  
  // const searchedUser = await User.findOne({email: param});
  
  // res.send(
  //   searchedUser
  // //  req.query.email
  // );
});




  

router.post("/sendmoney", (req, res) => {

  
  User.findOne({email: req.body.email})
  .then(user =>{
    console.log(user.email);

    User.findOneAndUpdate({email: user.email},{balance: user.balance + req.body.amount },{new: true},
    function(
      err,
      inventory
    ) {
      if (err) {
        console.log("err", err);
        res.status(500).send(err);
      } else {
        console.log("success");
        res.send(inventory);
      }
    }
    );
  })

});

//Add duration to current date to get due date
Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

var date = new Date();

console.log(date.addDays(5));

router.post("/newinvestment", (req, res) => {

 
  User.findOne({email: req.body.email})
  .then(user =>{
    // console.log(user.email);

    User.findOneAndUpdate({email: user.email},
      {roi: req.body.roi,
        invested: req.body.invested,
        duration: req.body.duration,
        bonus: req.body.bonus,
        investdate: date.addDays(req.body.duration),
        hasAPlan: true,
        balance: user.balance - req.body.invested, 
      },{new: true},
    function(
      err,
      inventory
    ) {
      if (err) {
        console.log("err", err);
        res.status(500).send(err);
      } else {
        console.log("success");
        res.send(inventory);
      }
    }
    );
  })

});


module.exports = router;
