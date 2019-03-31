import React from "react";
import { connect } from "react-redux";
import LoginForm from "./login-form";
import { Link, Redirect } from "react-router-dom";
import "./css/login.css";

class Login extends React.Component {
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/profile" />;
    } else {
      return (
        <section className="loginBackground">
          <h3 className="loginText"> Sign in</h3>
          <LoginForm />
          <section className='demo-container'>
            <p>Demo account</p>
            <p>Username: demovip</p>
            <p>Password: restisrust</p>
          </section>
          <div className='customHr'></div>
          <h3 className="loginText"> Sign up</h3>
          <Link className="smallloginText" to="/register">
            Register
          </Link>
        </section>
      );
    }
  }
}

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser !== null
});

export default connect(mapStateToProps)(Login);
