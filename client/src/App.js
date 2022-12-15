import React, { Component } from "react";
import { HashRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navigation from "./components/layout/Nav3.js";
import Footer from "./components/layout/Footer.js";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Signup";
import Login from "./components/auth/Signin";
import Home from "./components/layout/home/Home.js";
import About from "./components/about/about.js";
import Contact from "./components/contact/contact";
import Errorpage from "./components/error/error";
import TransactionData from "./components/data/Transactions";
import AllUsers from "./components/data/AllUSers";
import Transfer from "./components/admin/Transfer";

import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard2.js";
import Deposit from "./components/deposit/Deposit.js";
import Invest from "./components/Invest/Invest";

import AdminRoute from "./components/private-route/AdminRoute";
import Admin from "./components/admin/admin";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}



class App extends Component {
  render() {


    return (
      <Provider store={store}>
        <Router>
          <div className="App">

            
            <Navigation />
            {/* <Invest/> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              {/* <Switch> */}
              <AdminRoute exact path="/admin" component={Admin} />
              <AdminRoute exact path="/transfer" component={Transfer} />
              <AdminRoute exact path="/allusers" component={AllUsers} />
              <AdminRoute exact path="/alltransactions" component={TransactionData} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/addfunds" component={Deposit} />
              <PrivateRoute exact path="/invest" component={Invest} />
              {/* </Switch> */}

              {/* <Route component={AllUsers} /> */}

            </Switch>

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
