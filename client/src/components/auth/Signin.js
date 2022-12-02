// Style
// import './sign.css';

// function SignIn() {
//   return (
//     <div className="sign">

//     <h2>Welcome Back</h2> <br />
//     <p>Login to manage your account.</p>

//     <form action="">
//         <label htmlFor="">Email address</label> <br /><br />
//         <input type="text" placeholder='Email address' />
//         <br /> <br /> <br />
//         <label htmlFor="">Password</label> <br /> <br />
//         <input type="password" /> <br /> <br />
//         <input type="checkbox" />
//         <label htmlFor=""> Remember Me</label> <br /> <br />
//         <p>Don't have an account? Signup</p> <br /> <br />
//         <button>Log In</button>
//     </form>

//     </div>
//   );
// }

// export default SignIn;


import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="sign">

        <h2>Welcome Back</h2> <br />
        <p>Login to manage your account.</p>

        <form noValidate onSubmit={this.onSubmit}>
          <label htmlFor="">Email address</label> <br /><br />
          <input
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            type="email"
            className={classnames("", {
              invalid: errors.email || errors.emailnotfound
            })}
          />
          <span className="red-text">
            {errors.email}
            {errors.emailnotfound}
          </span>

          <br /> <br /> <br />
          <label htmlFor="">Password</label> <br /> <br />
          <input
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            id="password"
            type="password"
            className={classnames("", {
              invalid: errors.password || errors.passwordincorrect
            })}
          />
          <span className="red-text">
            {errors.password}
            {errors.passwordincorrect}
          </span>
          <br /> <br />
          {/* <input type="checkbox" />
          <label htmlFor=""> Remember Me</label> <br /> <br /> */}
          <p>Don't have an account? <Link to="/register">Sign up</Link></p> <br /> <br />
          <button type="submit">Log In</button>
        </form>

      </div>
    );
  }
}

SignIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(SignIn);
