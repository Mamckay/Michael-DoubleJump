import React from "react";
import { connect } from "react-redux";
import RegistrationForm from "./registration-form";
import { Link, Redirect } from "react-router-dom";

class Register extends React.Component {
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/profile" />;
    } else {
      return (
        <section className="loginBackground">
          <h3 className="loginText"> Sign up</h3>
          <RegistrationForm />
          <div className='customHr'></div>
          <h3 className="loginText"> Already have an account? </h3>
          <Link className="smallloginText" to="/login">
            Login
          </Link>
        </section>
      );
    }
  }
}

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser !== null
});

export default connect(mapStateToProps)(Register);
