import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions/users";
import { login } from "../actions/auth";
import LoginForm from "./login-form";
import { Link, Redirect } from "react-router-dom";
import "./css/login.css";

class Login extends React.Component {
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/profile" />;
    } else {
      return (
        <div className="loginBackground">
          <h3 className="loginText"> Sign in</h3>
          <LoginForm />
          <br />
          <hr />
          <h3 className="loginText"> Sign up</h3>
          <Link className="smallloginText" to="/register">
            Register
          </Link>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser !== null
});

export default connect(mapStateToProps)(Login);
