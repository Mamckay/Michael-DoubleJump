import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions/users";
import { login } from "../actions/auth";
import RegistrationForm from "./registration-form";
import { Link, Redirect } from "react-router-dom";

class Register extends React.Component {
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/profile" />;
    } else {
      return (
        <div className="loginBackground">
          <h3 className="loginText"> Sign up</h3>
          <RegistrationForm />
          <br />
          <hr />
          <h3 className="loginText"> Already have an account? </h3>
          <Link className="smallloginText" to="/login">
            Login
          </Link>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser !== null
});

export default connect(mapStateToProps)(Register);
