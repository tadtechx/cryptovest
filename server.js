const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const transactions = require("./routes/api/transactions");

const app = express();

const nodemailer = require("nodemailer")
const sendGridTransport = require("nodemailer-sendgrid-transport");
const {SENDGRID_API} = require('./config/keys');

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useFindAndModify: false },
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/transactions", transactions);




const transporter = nodemailer.createTransport(sendGridTransport({
  auth:{
  api_key:SENDGRID_API
  }
  }))

  app.post("/send", (req, res) => {
    const { amount, network, email, address } = req.body
    transporter.sendMail({
    to:"eustacedyke@gmail.com",
    from: "eustacedyke@gmail.com",
    subject:"any",
    html:`<h3>${amount}</h3>
    <p>${network}</p>`
    }).then(resp => {
    res.json({resp})
    })
    .catch(err => {
    console.log(err)
    })
    })






const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
