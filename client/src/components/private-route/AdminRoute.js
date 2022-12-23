import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AdminRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.user.email === "CRYPTOVEST716@GMAIL.COM" ? (
        <Component {...props} />
      ) : (
        <Redirect to="*" />
      )
    }
  />
);

AdminRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});



export default connect(mapStateToProps)(AdminRoute);
