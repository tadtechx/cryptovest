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

import PrivateRoute from "./components/private-route/PrivateRoute";
import AdminRoute from "./components/private-route/AdminRoute";
import Dashboard from "./components/dashboard/Dashboard2.js";
import Deposit from "./components/deposit/Deposit.js";
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


            <Navigation/>
            
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Switch>
              <AdminRoute exact path="/admin" component={Admin} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/addfunds" component={Deposit} />
            </Switch>

            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
